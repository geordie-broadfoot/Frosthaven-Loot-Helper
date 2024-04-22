import { useAppState } from "../../../context/AppContext"
import { Actions } from "../../../context/actions"
import { LootSettingButton } from "./lootSettingButton"

export const ShowColorsButton = () => {
	const { state, dispatch } = useAppState()

	const colors = state.options.colorCodeLootCards

	return (
		<LootSettingButton
			text={colors ? "Colors On" : "Colors Off"}
			onClick={() => dispatch(Actions.updateOption("colorCodeLootCards", !colors))}
		/>
	)
}
