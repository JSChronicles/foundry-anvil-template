# foundry-anvil-template

<a name="readme-top"></a>

[![task-validation][task-validation-badge]][task-validation-url]
[![ruff][ruff-badge]][ruff-url]
[![prek][prek-badge]][prek-url]

<br />
<div align="center">
  <img src="images/logo.png" alt="Foundry Anvil template logo" width="256" height="256">

  <h3 align="center">Anvil project template</h3>

  <p align="center">
    <a href="https://github.com/JSChronicles/anvil#usage"><strong>Read the Anvil documentation »</strong></a>
    <br />
    <a href="https://github.com/JSChronicles/foundry-anvil-template/issues/new?labels=Bug%2CNeeds+Triage&projects=&template=bug.yaml&title=%5BBUG%5D+%3A+%20">Report Bug</a>
    ·
    <a href="https://github.com/JSChronicles/foundry-anvil-template/issues/new?labels=enhancement%2Cfeature+request&projects=&template=feature.yaml&title=%5BFEATURE%5D%3A+%20">Request Feature</a>
  </p>
</div>

## Introduction

> [!NOTE]
> This template pins Anvil v0.30.0 directly from GitHub because the package is not yet published to PyPI.

This repository is a consumer starter for [Anvil](https://github.com/JSChronicles/anvil), not the engine source itself. It provides:

- [`yaml`](./yaml/) for schema-v2 Anvil target configurations.
- [`tasks`](./tasks/) for universal, AWS, Azure, GCP, and GitHub project-local tasks registered through provider-owned entry points.
- [`processors`](./processors/) for post-run processors that create reports, summaries, or findings from Anvil results.
- [`schemas`](./schemas/) for editor completion and validation against Anvil configuration schema v2.
- [`examples/github-actions`](./examples/github-actions/) for AWS OIDC workflow examples.

Use this template when you want a repository that can:

- Install a pinned Anvil release directly from GitHub.
- Expose project-local tasks and processors without forking Anvil.
- Validate task, processor, and YAML discovery in CI.
- Provide teams with a predictable layout for configurations, extensions, documentation, and workflows.

For current engine documentation, provider configuration, and task contracts, see the [Anvil README](https://github.com/JSChronicles/anvil#usage).

## Usage

### Quick start

1. Install [uv](https://docs.astral.sh/uv/getting-started/installation/).
2. Create the environment and install this template project:

   ```powershell
   uv sync
   ```

3. Update [`yaml/noop.yaml`](./yaml/noop.yaml):
   - Set `provider.options.profile` for local profile authentication.
   - Set the desired AWS regions.
   - Set `provider.options.role_name` if the member-account role differs from the default.
4. Validate the project and starter configuration:

   ```powershell
   uv run anvil validate --tasks
   uv run anvil validate --processors
   uv run anvil validate --config-file .\yaml\noop.yaml
   ```

5. Run the starter configuration:

   ```powershell
   uv run anvil run --config-file .\yaml\noop.yaml --dry-run
   ```

The shipped `noop` configuration is the smallest first run for validating authentication, discovery, and result output before adding custom tasks.

### Task structure and entry points

Put each task module in the package matching the providers on which it can run:

```text
tasks/
├── universal/  # Provider-neutral tasks
├── aws/        # AWS tasks
├── azure/      # Azure tasks
├── gcp/        # GCP tasks
└── github/     # GitHub tasks
```

The template registers every supported package through its provider-owned entry-point group:

```toml
[project.entry-points."anvil.providers.tasks"]
foundry_anvil_template = "tasks.universal"

[project.entry-points."anvil.providers.aws.tasks"]
foundry_anvil_template = "tasks.aws"

[project.entry-points."anvil.providers.azure.tasks"]
foundry_anvil_template = "tasks.azure"

[project.entry-points."anvil.providers.gcp.tasks"]
foundry_anvil_template = "tasks.gcp"

[project.entry-points."anvil.providers.github.tasks"]
foundry_anvil_template = "tasks.github"
```

The filename becomes the task name. For example, `tasks/github/audit_repositories.py` is selected as `audit_repositories` on GitHub targets. See [extension package discovery](https://github.com/JSChronicles/anvil#extension-package-discovery) for the current entry-point groups and [validation](https://github.com/JSChronicles/anvil#validation) for the supported checks.

### Examples

- [Anvil configuration examples](https://github.com/JSChronicles/anvil/tree/main/examples)
- [GitHub Actions and AWS OIDC examples](./examples/github-actions/)
- [Anvil v0.30.0 release notes](https://github.com/JSChronicles/anvil/releases/tag/v0.30.0)

[task-validation-badge]: https://github.com/JSChronicles/foundry-anvil-template/actions/workflows/task-validation.yaml/badge.svg?branch=main
[task-validation-url]: https://github.com/JSChronicles/foundry-anvil-template/actions/workflows/task-validation.yaml
[ruff-badge]: https://github.com/JSChronicles/foundry-anvil-template/actions/workflows/ruff.yaml/badge.svg?branch=main
[ruff-url]: https://github.com/JSChronicles/foundry-anvil-template/actions/workflows/ruff.yaml
[prek-badge]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/j178/prek/master/docs/assets/badge-v0.json
[prek-url]: https://github.com/j178/prek
