import { useAppState } from "../../../context/AppContext"
import { Actions } from "../../../context/actions"
import { Container, Txt } from "../../elements"
import { LootSettingButton } from "./lootSettingButton"

export const GroupLoopButton = () => {
	const { state, dispatch } = useAppState()

	return (
		<LootSettingButton
			onClick={() => {
				dispatch(
					Actions.updateOption(
						"showIndividualLootCards",
						!state.options.showIndividualLootCards,
					),
				)
			}}
			text={"Grouping " + (state.options.showIndividualLootCards ? "Off" : "On")}
		/>
	)
}
