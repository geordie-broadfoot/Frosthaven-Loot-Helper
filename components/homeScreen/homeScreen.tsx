import { useAppState } from "../../context/AppContext"
import { Container } from "../elements/container"
import { PlayerSelectScreen } from "../playerSelect/playerSelectScreen"
import { SplashScreen } from "../splashScreen/splashScreen"
import { Actions } from "../../context/actions"
import { BuildDeckScreen } from "../deckBuilding/buildDeckScreen"
import { LootScreen } from "../loot/lootScreen"
import { NavBar } from "../navBar/navBar"
import { SettingsScreen } from "../settings/settingsScreen"
import { useState } from "react"
import { ScrollView } from "react-native"

export const HomeScreen = () => {
	const { state, dispatch } = useAppState()

	const [splash, setSplash] = useState(true)

	setTimeout(() => {
		if (splash) {
			setSplash(false)
		}
	}, 2000)

	const getScreen = () => {
		if (state.screen === "players") return <PlayerSelectScreen />
		else if (state.screen === "deck") return <BuildDeckScreen />
		else if (state.screen === "loot" || state.screen === "loot_result")
			return <LootScreen />
		else if (state.screen === "options") return <SettingsScreen />
	}

	return (
		<Container
			paddingTop={40}
			padding={0}
			flexGrow={1}
			maxHeight={"100%"}
			alignItems="center"
			justifyContent="space-between"
		>
			{splash ? (
				<SplashScreen />
			) : (
				<>
					{getScreen()}
					<NavBar />
				</>
			)}
		</Container>
	)
}
