import React from "react"
import { Actions } from "../../context/actions"
import { useAppState } from "../../context/AppContext"
import { Button, Col, MainContent, Txt } from "../elements"
import { PlayerSelect } from "./playerSelect"

export const PlayerSelectScreen = () => {
	const { state, dispatch } = useAppState()
	return (
		<MainContent>
			<Col justifyContent="space-between" flexGrow={1} alignItems="center" gap={30}>
				<PlayerSelect />
				<Button onClick={() => dispatch(Actions.setScreen("deck"))}>
					<Txt>Build deck</Txt>
				</Button>
			</Col>
		</MainContent>
	)
}
