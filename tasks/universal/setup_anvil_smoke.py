"""Smoke-test task for setup-anvil plugin discovery."""

from anvil.actions import ActionRecorder


def run(
    *,
    provider: str,
    execution_target_id: str,
    execution_target_name: str,
    execution_target_type: str,
    region: str,
    session: object,
    dry_run: bool,
    metadata: dict[str, object],
    dependency_data: dict[str, object],
    actions: ActionRecorder,
) -> dict[str, object]:
    """Confirm that Anvil discovered the checked-out project's task package.

    Args:
        provider: Provider name for the execution target.
        execution_target_id: Provider-specific target ID.
        execution_target_name: Display name for the target.
        execution_target_type: Provider-specific target type.
        region: Current execution region.
        session: Provider session supplied by Anvil.
        dry_run: Whether Anvil is operating in dry-run mode.
        metadata: Task metadata. No values are required.
        dependency_data: Dependency results. No values are required.
        actions: Action recorder supplied by Anvil.

    Returns:
        A payload confirming project-local task execution.
    """
    actions.record(
        f"Confirmed setup-anvil plugin discovery for "
        f"{provider} target {execution_target_id} in {region}"
    )
    return {"discovered": True, "package": "foundry-anvil-template"}
