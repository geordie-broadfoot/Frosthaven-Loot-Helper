import { Button, Col, MainContent, Row, Txt } from "../elements"
import { useAppState } from "../../context/AppContext"
import { LootTokensScreen } from "./lootTokens"
import { NoDeckWarning } from "./noDeckWarning"
import { LootResults } from "./lootResult"
import { Actions } from "../../context/actions"
import * as Icon from "@expo/vector-icons"
import { Toggle } from "../settings/settingsScreen"
import { ALL_LOOT_CARDS } from "../../consts/cards"

export const LootScreen = () => {
	const { state, dispatch } = useAppState()

	const handleDrawLoot = () => {
		let lootDeck = [...state.lootDeck.cards]

		for (let player of state.players) {
			player.cards = []
			for (let i = 0; i < player.tokens; i++) {
				let index = Math.floor(Math.random() * lootDeck.length)

				let draw = lootDeck[index]

				if (draw) {
					player.cards.push(lootDeck[index])
					lootDeck.splice(index, 1)
				}
			}

			const cardOrder = Object.keys(ALL_LOOT_CARDS)

			player.cards.sort((a, b) => {
				let iA = cardOrder.indexOf(a.type)
				let iB = cardOrder.indexOf(b.type)

				if (iA < iB) return -1
				if (iA > iB) return 1
				return 0
			})
		}

		dispatch(Actions.setScreen("loot_result"))
		dispatch(Actions.setUndrawnLootCards(lootDeck))
	}

	return (
		<>
			<MainContent>
				<Col alignItems="stretch" flexGrow={1} width="100%">
					{state.screen === "loot" ? (
						<Col alignItems="center" gap={30} flexGrow={1}>
							<LootTokensScreen />
							<NoDeckWarning />
							<Button
								onClick={handleDrawLoot}
								disabled={state.lootDeck.cards.length == 0}
							>
								<Txt md>Draw Loot</Txt>
							</Button>
						</Col>
					) : (
						<LootResults />
					)}
				</Col>
			</MainContent>
			{state.screen === "loot_result" && (
				<Row
					width="100%"
					alignItems="center"
					justifyContent="space-evenly"
					marginTop={3}
					paddingTop={10}
					marginBottom={10}
					borderTopWidth={1}
				>
					<Button
						onClick={() => {
							dispatch(Actions.setScreen("loot"))
							for (let p of state.players)
								dispatch(Actions.updatePlayer(p.id, "cards", []))
						}}
					>
						<Icon.FontAwesome5 name="dice" size={18} />
						<Txt xxs>Reroll</Txt>
					</Button>
					<Toggle name="showIndividualLootCards" title="Group loot" invert />
					<Toggle name="showUndrawnLoot" title="Show undrawn" />
				</Row>
			)}
		</>
	)
}
