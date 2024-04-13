import { useAppState } from "../../context/AppContext"
import { Actions } from "../../context/actions"
import { Col, Row, Txt } from "../elements"
import { Counter } from "../elements/counter"

export const LootTokensScreen = () => {
	const { state, dispatch } = useAppState()

	const availableLoot = state.lootDeck.cards.length
	const totalLoot = state.players.reduce((sum, p) => sum + p.tokens, 0)

	return (
		<Col gap={15} alignItems="center" paddingHorizontal={10}>
			<Txt xxl>Loot Tokens</Txt>
			<Txt sm>Loot available: {availableLoot - totalLoot}</Txt>
			{state.players.map((player) => {
				return (
					<Row key={player.id}>
						<Counter
							name={player.name}
							count={player.tokens}
							min={0}
							max={availableLoot === totalLoot ? player.tokens : 100}
							onCountUp={() => {
								dispatch(Actions.updatePlayer(player.id, "tokens", player.tokens + 1))
							}}
							onCountDown={() => {
								dispatch(Actions.updatePlayer(player.id, "tokens", player.tokens - 1))
							}}
						/>
					</Row>
				)
			})}
		</Col>
	)
}
