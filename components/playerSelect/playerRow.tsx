import { Player } from "../../consts/types"
import { Actions } from "../../context/actions"
import * as Icon from "@expo/vector-icons"
import { Row } from "../elements"
import { useAppState } from "../../context/AppContext"
import { TextInput } from "react-native"
import { FontSizes } from "../elements/txt"

type Props = {
	player: Player
	index: number
}

export const PlayerRow = ({ player, index }: Props) => {
	const { dispatch } = useAppState()

	return (
		<Row width="auto" justifyContent="space-between" alignItems="center" key={player.id}>
			<TextInput
				style={{
					fontSize: FontSizes.lg,
					padding: 15,
					backgroundColor: "white",
					width: 240,
					borderWidth: 1,
					borderRadius: 10,
				}}
				defaultValue={player.name}
				onChange={(e) => {
					dispatch(Actions.setNickname(player.id, e.nativeEvent.text))
				}}
				selectTextOnFocus
			/>
			{index >= 2 && (
				<Icon.Feather
					name="trash-2"
					size={24}
					color="black"
					onPress={() => {
						dispatch(Actions.deletePlayer(player.id))
					}}
				/>
			)}
		</Row>
	)
}
