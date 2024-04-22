import { useAppState } from "../../../context/AppContext"
import { Actions } from "../../../context/actions"
import { LootSettingButton } from "./lootSettingButton"

export const ShowNamesButton = () => {
	const { dispatch, state } = useAppState()

	const showNames = state.options.showLootNames

	return (
		<LootSettingButton
			text={showNames ? "Names On" : "Names Off"}
			onClick={() => dispatch(Actions.updateOption("showLootNames", !showNames))}
		/>
	)
}
