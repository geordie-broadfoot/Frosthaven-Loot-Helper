import { Switch } from "react-native"
import { useAppState } from "../../context/AppContext"
import { Actions } from "../../context/actions"
import { Row } from "./row"
import { Txt } from "./txt"

type SwitchProps = {
	name: any
	title: string
	invert?: boolean
}
export const Toggle = ({ name, title, invert = false }: SwitchProps) => {
	const { state, dispatch } = useAppState()
	return (
		<Row
			justifyContent="space-between"
			alignItems="center"
			onClick={() => dispatch(Actions.updateOption(name, !state.options[name]))}
		>
			<Switch value={invert ? !state.options[name] : state.options[name]} />
			<Txt xs>{title}</Txt>
		</Row>
	)
}
