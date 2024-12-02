import { useAppState } from "../../context/AppContext"
import { Container } from "../elements/container"
import { PlayerSelectScreen } from "../playerSelect/playerSelectScreen"
import { SplashScreen } from "../splashScreen/splashScreen"
import { BuildDeckScreen } from "../deckBuilding/buildDeckScreen"
import { LootScreen } from "../loot/lootScreen"
import { NavBar } from "../navBar/navBar"
import { SettingsScreen } from "../settings/settingsScreen"
import { useEffect, useState } from "react"
import { HomeScreen } from "../homeScreen/homeScreen"
import { Button, Row, Txt } from "../elements"
import * as Icon from "@expo/vector-icons"
import { Actions } from "../../context/actions"

const SCREENS = {
	home: "Frosthaven Loot Helper",
	scenarios: "Scenarios",
	options: "Settings",
	deck: "Build a Deck",
	players: "Party",
} as const

export const ScreenProvider = () => {
	const { state, dispatch } = useAppState()

	const [splash, setSplash] = useState(true)

	setTimeout(() => {
		if (splash) {
			setSplash(false)
		}
	}, 2000)

	console.log("screen hist", state.screenHistory, state.screen)

	const TitleBar = () => {
		return (
			<Row width="90%" justifyContent="space-between">
				<Container>
					{state.screen !== "home" && (
						<Icon.FontAwesome
							name="arrow-left"
							size={24}
							onPress={() => dispatch(Actions.goBack())}
						/>
					)}
				</Container>
				<Txt lg>{SCREENS[state.screen]}</Txt>
				<Icon.FontAwesome
					name="gear"
					size={32}
					onPress={() => dispatch(Actions.setScreen("options"))}
				/>
			</Row>
		)
	}

	const Screen = () => {
		if (splash) return <SplashScreen />

		switch (state.screen) {
			case "home":
				return <HomeScreen />
			case "players":
				return <PlayerSelectScreen />
			case "deck":
				return <BuildDeckScreen />
			case "loot":
			case "loot_result":
				return <LootScreen />
			case "upgrades":
				return (
					<>
						<Txt xxl> Upgrades</Txt>
					</>
				)
			case "options":
				return <SettingsScreen />
			default:
				return <></>
		}
	}

	return (
		<Container
			paddingTop={40}
			padding={0}
			flexGrow={1}
			maxHeight={"100%"}
			alignItems="center"
			justifyContent="space-between"
			onClick={() => {
				if (splash) setSplash(false)
			}}
		>
			<TitleBar />
			<Screen />
			{/* {!splash && <NavBar />} */}
		</Container>
	)
}
