# foundry-anvil-template

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![task-validation][task-validation-badge]][task-validation-url]
[![ruff][ruff-badge]][ruff-url]
[![prek][prek-badge]][prek-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="images/anvil-logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="images/anvil-logo-light.png">
    <img src="images/anvil-logo-light.png" alt="Anvil logo" width="236">
  </picture>

  <h3 align="center">README</h3>

  <p align="center">
    <a href="https://github.com/JSChronicles/foundry-anvil-template"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/JSChronicles/foundry-anvil-template/issues/new?labels=Bug%2CNeeds+Triage&projects=&template=bug.yaml&title=%5BBUG%5D+%3Ctitle%3E">Report Bug</a>
    ·
    <a href="https://github.com/JSChronicles/foundry-anvil-template/issues/new?labels=enhancement%2Cfeature+request&projects=&template=feature.yaml&title=%5BFEATURE%5D%3A+">Request Feature</a>
  </p>
</div>

## Introduction
> [!NOTE]
> This template pins Anvil directly from GitHub because it is not published to PyPI yet.

This repository is a consumer starter for Anvil, not the [Anvil engine source](https://github.com/JSChronicles/anvil) itself. It provides:

- Starter directories for:
- [`yaml`](./yaml/) for schema-v2 Anvil target configurations.
- [`tasks`](./tasks/) for universal, AWS, Azure, GCP, and GitHub project-local tasks registered through provider-owned entry points.
- [`processors`](./processors/) for post-run processors that create reports, summaries, or findings from Anvil results.
- Registered entry-point groups for both tasks and processors.
- Example GitHub Actions workflows you can adapt for your own environments.

Use this template when you want a repo that can:
- Install a pinned Anvil release directly from GitHub.
- Expose project-local tasks and processors without forking Anvil.
- Validate task, processor, and YAML discovery in CI.
- Provide teams with a predictable layout for configurations, extensions, documentation, and workflows.

For more, see the [documentation](https://opsfoundry.dev/).


## Usage
### Quick start

1. Install [uv](https://docs.astral.sh/uv/getting-started/installation/)
1. Create the environment and install this template project: `uv sync`
1. Update [`yaml/noop.yaml`](./yaml/noop.yaml):
   1. Set `profile`
   1. Set `regions`
   1. Set `role_name` if your member-account role differs
1. Validate that Anvil can discover tasks and processors:
   1. `uv run anvil list --tasks`
   1. `uv run anvil list --processors`
1. Run the starter config:
   1. `uv run anvil run --config-file .\yaml\noop.yaml --dry-run`

The shipped `noop` config is the smallest first run for validating auth, discovery, and result output before you switch over to custom tasks. It can be used to prove that Anvil is wired correctly before building larger multi-org workflows.

### Examples
For broader or deeper Anvil examples that live with the engine source, see the Anvil source repository examples:
- [JSChronicles/anvil examples](https://github.com/JSChronicles/anvil/tree/main/examples)

For a complete GitHub Actions example that runs Anvil with AWS OIDC and uploads
the generated JSON results as workflow artifacts, see
[`examples/github-actions`](./examples/github-actions/README.md).


<!-- MARKDOWN LINKS & IMAGES -->
[task-validation-badge]:https://github.com/JSChronicles/foundry-anvil-template/actions/workflows/task-validation.yaml/badge.svg?branch=main
[task-validation-url]:https://github.com/JSChronicles/foundry-anvil-template/actions/workflows/task-validation.yaml
[ruff-badge]:https://github.com/JSChronicles/foundry-anvil-template/actions/workflows/ruff.yaml/badge.svg?branch=main
[ruff-url]:https://github.com/JSChronicles/foundry-anvil-template/actions/workflows/ruff.yaml

[prek-badge]:https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/j178/prek/master/docs/assets/badge-v0.json
[prek-url]:https://github.com/j178/prek

