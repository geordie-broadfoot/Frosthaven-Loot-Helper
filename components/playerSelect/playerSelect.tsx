import { Button } from "react-native"
import { useAppState } from "../../context/AppContext"
import { Actions } from "../../context/actions"
import { Col, Container, Row, Txt } from "../elements"
import { PlayerRow } from "./playerRow"
import { useState } from "react"
import { AddPlayerButton } from "./addPlayer"

const defaultPlayers = [
	{
		id: 1,
		name: "Player 1",
	},
	{
		id: 2,
		name: "Player 2",
	},
]

export const PlayerSelect = () => {
	const { state, dispatch } = useAppState()

	return (
		<Container
			flexDirection="column"
			alignItems="stretch"
			justifyContent="flex-start"
			flexBasis="auto"
			flexWrap="nowrap"
		>
			<Txt xxl>Select Players</Txt>
			<Row height={60} />
			<Col gap={15} alignItems="stretch">
				<Txt xxs>Tap to Rename</Txt>
				{state.players.map((p, i) => (
					<PlayerRow key={p.id} player={p} index={i} />
				))}
				{state.players.length < 4 && (
					<Row justifyContent="center">
						<AddPlayerButton />
					</Row>
				)}
			</Col>
		</Container>
	)
}
