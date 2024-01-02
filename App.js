import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import * as stuff from "./consts/cards"

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your apps! </Text>
			{Object.entries(stuff.nameMaps).map(([k, v]) => (
				<Text>
					{k} {" -> "}
					{v}
				</Text>
			))}
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
})
