import { Switch } from "react-native"
import { Col, Row, Txt } from "../elements"
import { ClearStateButton } from "../homeScreen/clearState"
import { useAppState } from "../../context/AppContext"
import { Actions } from "../../context/actions"

export const SettingsScreen = () => {
	const { state } = useAppState()

	const headerIndent = 20

	return (
		<Col justifyContent="space-between" alignItems="center">
			<Col paddingTop={30} paddingBottom={80} paddingLeft={10} width="90%">
				<Txt sm marginLeft={headerIndent} fontWeight="600">
					Special coins
				</Txt>
				<Toggle name={1418} title="Include Special Coin # 1418" />
				<Toggle name={1419} title="Include Special Coin # 1419" />
				<Txt sm marginLeft={headerIndent} fontWeight="600">
					Debug
				</Txt>
				<Toggle name="showCardIds" title="Show card IDs during loot results" />
				<Txt sm marginLeft={headerIndent} fontWeight="600">
					Loot
				</Txt>
				<Toggle name="showUndrawnLoot" title="Show undrawn loot cards" />
				<Toggle name="colorCodeLootCards" title="Color code loot cards" />
				<Toggle
					name="showIndividualLootCards"
					title={
						state.options.showIndividualLootCards
							? "Show grouped summary"
							: "Show individual loot cards"
					}
				/>
			</Col>
			<ClearStateButton />
		</Col>
	)
}

type SwitchProps = {
	name: any
	title: string
	invert?: boolean
}
export const Toggle = ({ name, title, invert = false }: SwitchProps) => {
	const { state, dispatch } = useAppState()
	return (
		<Row
			justifyContent="space-between"
			alignItems="center"
			onClick={() => dispatch(Actions.updateOption(name, !state.options[name]))}
		>
			<Switch value={invert ? !state.options[name] : state.options[name]} />
			<Txt xs>{title}</Txt>
		</Row>
	)
}
