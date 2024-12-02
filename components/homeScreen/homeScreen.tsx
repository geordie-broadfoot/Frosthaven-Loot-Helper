import { useAppState } from "../../context/AppContext"
import { Container } from "../elements/container"
import { PlayerSelectScreen } from "../playerSelect/playerSelectScreen"
import { SplashScreen } from "../splashScreen/splashScreen"
import { Actions } from "../../context/actions"
import { BuildDeckScreen } from "../deckBuilding/buildDeckScreen"
import { LootScreen } from "../loot/lootScreen"
import { SettingsScreen } from "../settings/settingsScreen"
import { useState } from "react"
import { ScrollView } from "react-native"
import { Button, MainContent, Row, Txt } from "../elements"
import { IconButton } from "./iconButton"
import * as Icon from "@expo/vector-icons"

export const HomeScreen = () => {
	const { state, dispatch } = useAppState()

	const goToScreen = (screen: string) => {
		dispatch(Actions.setScreen(screen))
	}

	const iconSize = 48

	return (
		<MainContent>
			<Row height={60} />
			<Row flexWrap="wrap" gap={5} justifyContent="center">
				<IconButton
					title="Party"
					onClick={() => goToScreen("players")}
					icon={<Icon.FontAwesome name="group" size={iconSize} />}
				/>
				<IconButton
					title="Scenarios"
					onClick={() => goToScreen("scenarios")}
					icon={<Icon.FontAwesome name="bookmark" size={iconSize} />}
				/>

				<IconButton
					title="Build Deck"
					onClick={() => goToScreen("deck")}
					icon={<Icon.MaterialCommunityIcons name="cards" size={iconSize} />}
				/>

				<IconButton
					title="Card Upgrades"
					onClick={() => goToScreen("upgrades")}
					icon={<Icon.Foundation name="star" size={iconSize} />}
				/>
			</Row>
		</MainContent>
	)
}
