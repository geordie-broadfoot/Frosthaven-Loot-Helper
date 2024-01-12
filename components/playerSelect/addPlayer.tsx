import { useAppState } from "../../context/AppContext"
import { Actions } from "../../context/actions"
import { Button, Txt } from "../elements"

export const AddPlayerButton = () => {
	const { state, dispatch } = useAppState()

	const handleClick = () => {}

	return (
		<Button
			borderRadius={50}
			padding={0}
			height={50}
			width={50}
			lineHeight={50}
			onClick={() => dispatch(Actions.addPlayer("Player " + (state.players.length + 1)))}
		>
			<Txt lg>+</Txt>
		</Button>
	)
}
