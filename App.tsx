import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, View } from "react-native"
import { AppContext } from "./context/AppContext"
import { HomeScreen } from "./components/homeScreen/homeScreen"
import { ScreenProvider } from "./components/screens/screenProvider"

export default function App() {
	return (
		<AppContext>
			<View style={styles.container}>
				<StatusBar style="auto" />
				<ScreenProvider />
			</View>
		</AppContext>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "hsl(190, 100%, 94%)",
		height: "100%",
	},
})
