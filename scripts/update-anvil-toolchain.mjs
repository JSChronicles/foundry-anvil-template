import { readFile, writeFile } from "node:fs/promises";

const [anvilVersion, setupTag, setupSha] = process.argv.slice(2);
const exactVersion = /^\d+\.\d+\.\d+$/;
const releaseTag = /^v\d+\.\d+\.\d+$/;
const fullSha = /^[0-9a-f]{40}$/;

if (!exactVersion.test(anvilVersion || "")) {
  throw new Error("Anvil version must be a stable x.y.z version");
}
if (!releaseTag.test(setupTag || "")) {
  throw new Error("setup-anvil tag must be a stable vx.y.z tag");
}
if (!fullSha.test(setupSha || "")) {
  throw new Error("setup-anvil SHA must be a full commit SHA");
}

function versionParts(version) {
  return version.split(".").map((part) => Number.parseInt(part, 10));
}

function compareVersions(left, right) {
  const leftParts = versionParts(left);
  const rightParts = versionParts(right);
  for (let index = 0; index < 3; index += 1) {
    if (leftParts[index] !== rightParts[index]) {
      return leftParts[index] - rightParts[index];
    }
  }
  return 0;
}

const projectPath = "pyproject.toml";
const project = await readFile(projectPath, "utf8");
const requirementPattern = /("anvil>=)(\d+\.\d+\.\d+)(,<)(\d+\.\d+\.\d+)(")/;
const requirement = project.match(requirementPattern);

if (!requirement) {
  throw new Error(
    "could not find the bounded Anvil requirement in pyproject.toml",
  );
}
if (compareVersions(anvilVersion, requirement[4]) >= 0) {
  throw new Error(
    `Anvil ${anvilVersion} is outside the supported <${requirement[4]} compatibility line`,
  );
}

await writeFile(
  projectPath,
  project.replace(requirementPattern, `$1${anvilVersion}$3$4$5`),
);

const workflowPath = ".github/workflows/test-anvil-setup.yaml";
const workflow = await readFile(workflowPath, "utf8");
const actionPattern =
  /(uses: JSChronicles\/setup-anvil@)[0-9a-f]{40}( # )v\d+\.\d+\.\d+/;

if (!actionPattern.test(workflow)) {
  throw new Error(
    `could not find the pinned setup-anvil action in ${workflowPath}`,
  );
}

await writeFile(
  workflowPath,
  workflow.replace(actionPattern, `$1${setupSha}$2${setupTag}`),
);

console.log(
  `Updated Anvil to ${anvilVersion} and setup-anvil to ${setupTag} (${setupSha})`,
);
