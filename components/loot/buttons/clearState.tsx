import { Button } from "react-native"
import { useAppState } from "../../../context/AppContext"
import { Actions } from "../../../context/actions"

export const ClearStateButton = () => {
	const { state, dispatch } = useAppState()

	return <Button title="Reset App State" onPress={() => dispatch(Actions.clearState())} />
}
