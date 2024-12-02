import { useAppState } from "../../context/AppContext"
import { Actions } from "../../context/actions"
import { useKeyboardOpen } from "../../utils/useKeyboardOpen"
import { Col, Container, Row, Txt } from "../elements"
import * as Icon from "@expo/vector-icons"

type NavButtonProps = {
	title: string
	name: string
	icon: any
	onClick?: any
}

export const NavBar = () => {
	const { state, dispatch } = useAppState()
	const keyboardOpen = useKeyboardOpen()

	const NavButton = ({ title, icon, onClick, name }: NavButtonProps) => {
		return (
			<Col
				alignItems="center"
				flexGrow={1}
				onClick={() => {
					onClick?.()
					dispatch(Actions.setScreen(name))
				}}
			>
				<Txt xs>{title}</Txt>
				{icon}
			</Col>
		)
	}

	if (keyboardOpen) return <></>

	const iconSize = 40
	return (
		<Row height={80} alignItems="stretch" width="100%">
			<NavButton
				title="Home"
				name="home"
				icon={<Icon.FontAwesome name="home" size={iconSize} color="black" />}
			/>
			<NavButton
				title="Players"
				name="players"
				icon={<Icon.FontAwesome name="group" size={iconSize} color="black" />}
			/>
			<NavButton
				title="Build Deck"
				name="deck"
				icon={
					<Container justifyContent="center" alignItems="center">
						<Icon.MaterialCommunityIcons name="cards" size={iconSize} />
						{state.lootDeck.cards.length > 0 && (
							<Icon.Feather
								name="check"
								color="hsl(120, 100%, 40%)"
								size={iconSize * 1.5}
								style={{
									marginTop: -iconSize * 1.3,
								}}
							/>
						)}
					</Container>
				}
			/>
			<NavButton
				title="Draw Loot"
				name={state.players[0].cards.length === 0 ? "loot" : "loot_result"}
				icon={
					<Container justifyContent="center" alignItems="center">
						<Icon.MaterialCommunityIcons name="treasure-chest" size={iconSize} />
						{state.players.some((p) => p.cards.length > 0) && (
							<Icon.Feather
								name="check"
								color="hsl(120, 100%, 40%)"
								size={iconSize * 1.5}
								style={{
									marginTop: -iconSize * 1.3,
								}}
							/>
						)}
					</Container>
				}
			/>
			<NavButton
				title="Options"
				name="options"
				icon={<Icon.Ionicons name="settings" size={iconSize} />}
			/>
		</Row>
	)
}
