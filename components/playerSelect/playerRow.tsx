import { Player } from "../../consts/types"
import { Actions } from "../../context/actions"
import * as Icon from "@expo/vector-icons"
import { Row, Txt } from "../elements"
import { useAppState } from "../../context/AppContext"
import { useRef, useState } from "react"
import { TextInput } from "react-native"
import { FontSizes } from "../elements/txt"

type Props = {
	player: Player
	index: number
}

export const PlayerRow = ({ player, index }: Props) => {
	const [nickname, setNickname] = useState(player.name)

	const { state, dispatch } = useAppState()

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
				onChangeText={(text) => setNickname(text)}
				onChange={() => {
					dispatch(Actions.setNickname(player.id, nickname))
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
