# foundry-anvil-template

<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![task-validation][task-validation-badge]][task-validation-url]
[![ruff][ruff-badge]][ruff-url]
[![prek][prek-badge]][prek-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="images/logo.png" alt="Logo" width="256" height="256">
  </a>

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
This repository is a consumer starter for Anvil, not the [Anvil engine source](https://github.com/JSChronicles/anvil) itself. It gives you:
- a project-local `tasks/` package already registered through the `anvil.tasks` entry-point group
- a starter task at [`tasks/project_check.py`](./tasks/project_check.py)
- a starter config at [`yaml/noop.yaml`](./yaml/noop.yaml)
- example configs and GitHub Actions workflows you can adapt for your own environments

Use this template when you want a repo that can:
- install Anvil directly from your GitHub repository
- expose project-local tasks without forking Anvil
- validate task discovery quickly with a noop config
- give other teams a predictable layout for YAML, examples, docs, and CI wiring

For more, see the [documentation](https://opsfoundry.dev/).


## Usage
### Quick start

1. Install [uv](https://docs.astral.sh/uv/getting-started/installation/)
1. Create the environment and install this template project:
   1. `uv sync`
1. Update [`yaml/noop.yaml`](./yaml/noop.yaml):
   1. Set `profile`
   1. Set `regions`
   1. Set `role_name` if your member-account role differs
1. Validate that Anvil can discover the shipped starter task:
   1. `uv run anvil tasks list`
   1. `uv run anvil tasks validate`
1. Run the starter config:
   1. `uv run anvil run --config-file .\yaml\noop.yaml --dry-run`

The shipped `noop` config is the smallest first run for validating auth, discovery, and result output before you switch over to custom tasks. `yaml/noop.yaml` is the smallest config you use to prove that Anvil is wired correctly before building larger multi-org workflows.

This template pins Anvil directly from GitHub because it is not published to PyPI yet.

### Examples

Start with the curated examples in this repository:
- [`examples/01-single-org-explicit-profile.yaml`](./examples/01-single-org-explicit-profile.yaml)
- [`examples/02-complete-org-reference.yaml`](./examples/02-complete-org-reference.yaml)
- [`examples/03-complete-account-reference.yaml`](./examples/03-complete-account-reference.yaml)
- [`examples/github-actions`](./examples/github-actions/README.md)

These are the examples that should stay aligned with the template repo's intended consumer experience.

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

