import { useAppState } from "../../context/AppContext"
import { Col, Container, Row, Txt } from "../elements"
import { PlayerRow } from "./playerRow"
import { AddPlayerButton } from "./addPlayer"

export const PlayerSelect = () => {
	const { state } = useAppState()

	return (
		<Container
			flexDirection="column"
			alignItems="stretch"
			justifyContent="flex-start"
			flexBasis="auto"
			flexWrap="nowrap"
		>
			<Row height={60} />
			<Col gap={15} alignItems="stretch">
				<Txt xs>Tap to Rename</Txt>
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
