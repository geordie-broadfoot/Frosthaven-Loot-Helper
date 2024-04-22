import { ALL_LOOT_CARDS } from "../../consts/cards"
import { useAppState } from "../../context/AppContext"
import { Actions } from "../../context/actions"
import { Button, Col, MainContent, Row, Txt } from "../elements"
import { BuildLootDeck } from "./buildLootDeck"
import { generateLootDeck } from "./generateDeck"

export const BuildDeckScreen = () => {
	const { state, dispatch } = useAppState()

	const handleGenerateDeck = () => {
		const deck = generateLootDeck(state.lootDeck.composition, state.options)

		dispatch(Actions.setLootDeckCards(deck))
		dispatch(Actions.setScreen("loot"))
	}

	return (
		<MainContent>
			<Col alignItems="center" gap={30}>
				<BuildLootDeck />
				<Row justifyContent="space-around">
					<Button
						backgroundColor="hsl(10, 50%, 80%)"
						onClick={() => {
							Object.keys(ALL_LOOT_CARDS).forEach((type) =>
								dispatch(Actions.updateLootDeckComposition(type, 0)),
							)
							dispatch(Actions.resetLootDeck())
							for (let p of state.players) {
								dispatch(Actions.updatePlayer(p.id, "cards", []))
								dispatch(Actions.updatePlayer(p.id, "tokens", 0))
							}
						}}
					>
						<Txt>Reset</Txt>
					</Button>
					<Button onClick={handleGenerateDeck}>
						<Txt>
							{(state.lootDeck.cards.length === 0 ? "G" : "Re-g") + "enerate Deck"}
						</Txt>
					</Button>
				</Row>
			</Col>
		</MainContent>
	)
}
