import { Col, MainContent, Row, Txt, Toggle } from "../elements"
import { ClearStateButton } from "../loot/buttons/clearState"
import { useAppState } from "../../context/AppContext"
import { SCENARIOS } from "../../consts/scenarios"

export const SettingsScreen = () => {
	const { state } = useAppState()

	const headerIndent = 20

	console.log("SCENARIOS:", SCENARIOS)

	return (
		<MainContent>
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
					<Toggle name="useBasicMode" title="Basic view" />
					<Toggle name="showRerollButton" title="Show Reroll button on Results screen" />
					<Toggle name="showLootNames" title="Show resource names on loot" />
				</Col>
				<ClearStateButton />
			</Col>
		</MainContent>
	)
}
