import { useAppState } from "../../context/AppContext"
import { Col, Row, Txt } from "../elements"
import { RESOURCE, ResourceNames } from "../../consts/resources"
import { Actions } from "../../context/actions"
import { ALL_LOOT_CARDS } from "../../consts/cards"
import { Counter } from "../elements/counter"

export const BuildLootDeck = () => {
	const { state, dispatch } = useAppState()

	return (
		<Col alignContent="center" alignItems="center">
			<Txt md>
				Total loot:{" "}
				{Object.values(state.lootDeck.composition).reduce((sum, v) => sum + v, 0)}
			</Txt>

			<Row
				alignContent="stretch"
				justifyContent="center"
				flexWrap="wrap"
				gap={15}
				marginTop={20}
			>
				{Object.entries(state.lootDeck.composition).map(([type, count]) => {
					let maxNumber = ALL_LOOT_CARDS[type].length

					if (type === RESOURCE.gold) {
						if (!state.options[1418]) maxNumber--
						if (!state.options[1419]) maxNumber--
					}

					return (
						<Counter
							key={type}
							name={ResourceNames[type]}
							count={count}
							onCountDown={() => {
								dispatch(Actions.updateLootDeckComposition(type, count - 1))
							}}
							onCountUp={() => {
								dispatch(Actions.updateLootDeckComposition(type, count + 1))
							}}
							min={0}
							max={maxNumber}
							borderWidth={1}
							disabled={state.lootDeck.cards.length !== 0}
							icon={type}
						/>
					)
				})}
			</Row>
		</Col>
	)
}
