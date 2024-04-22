import { Button, Col, MainContent, Row, Txt } from "../elements"
import { useAppState } from "../../context/AppContext"
import { LootTokensScreen } from "./lootTokens"
import { LootResults } from "./lootResult"
import { Actions } from "../../context/actions"
import { ALL_LOOT_CARDS } from "../../consts/cards"
import { LootBottomBar } from "./lootBottomBar"

export const LootScreen = () => {
	const { state, dispatch } = useAppState()
	const lootUndrawn =
		state.lootDeck.undrawnCards.length === 0 &&
		state.players.every((p) => p.cards.length === 0)

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
					{lootUndrawn ? (
						<Col alignItems="center" gap={30} flexGrow={1}>
							<LootTokensScreen />
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
			{!lootUndrawn && <LootBottomBar reroll={handleDrawLoot} />}
		</>
	)
}
