# GitHub Actions examples

These examples run the Anvil v0.30 AWS provider with GitHub OIDC credentials.

## Single organization

- Workflow: [`anvil-single-oidc-run.yaml`](./anvil-single-oidc-run.yaml)
- Configuration: [`noop-single-oidc.yaml`](./noop-single-oidc.yaml)

Configure the `ANVIL_AWS_ROLE_ARN` environment variable with the AWS role that
GitHub Actions should assume. The role must be able to inspect the organization
and assume the member-account role configured under `provider.options.role_name`.

## Multiple organizations

- Workflow: [`anvil-multi-oidc-run.yaml`](./anvil-multi-oidc-run.yaml)
- Configuration: [`noop-multi-oidc.yaml`](./noop-multi-oidc.yaml)

Replace the example account IDs and role ARNs in the workflow. Each configured
AWS profile corresponds to the `provider.options.profile` value in the YAML.

Both workflows validate task discovery and provider authentication before
running Anvil. Results are uploaded from the complete `results` tree so JSONL,
summary, benchmark, and processor artifacts are retained.

For the current upstream workflow examples and provider configuration, see
[Anvil's GitHub Actions examples](https://github.com/JSChronicles/anvil/tree/main/examples/github-actions).
