import React from "react"
import { Container, Row, Col, Txt } from "../elements"
import * as Icon from "@expo/vector-icons"
import { useAppState } from "../../context/AppContext"
import { Actions } from "../../context/actions"

export const NoDeckWarning = () => {
	const { state, dispatch } = useAppState()

	return (
		<>
			{state.lootDeck.cards.length === 0 && (
				<Container
					padding={15}
					backgroundColor="hsl(60, 70%, 70%)"
					style={{ borderRadius: 15 }}
					alignItems="stretch"
					onClick={() => {
						dispatch(Actions.setScreen("deck"))
					}}
				>
					<Row alignItems="center" justifyContent="space-around" width="auto">
						<Icon.AntDesign name="warning" color="black" size={48} />
						<Col>
							<Txt xs> It looks like the loot deck</Txt>
							<Txt xs> hasn't been generated yet!</Txt>
						</Col>
					</Row>
				</Container>
			)}
		</>
	)
}
