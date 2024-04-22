import { useAppState } from "../../../context/AppContext"
import { Actions } from "../../../context/actions"
import { LootSettingButton } from "./lootSettingButton"

export const ShowUndrawnLootButton = () => {
	const { state, dispatch } = useAppState()

	const show = state.options.showUndrawnLoot

	return (
		<LootSettingButton
			text={show ? "Show undrawn" : "Hide undrawn"}
			onClick={() => dispatch(Actions.updateOption("showUndrawnLoot", !show))}
		/>
	)
}
