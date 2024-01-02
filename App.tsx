import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { RESOURCE, ResourceNames } from "./consts/resources"
import { getEnumKeys } from "./utils/enums"

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your apps! </Text>
			{getEnumKeys(RESOURCE).map((key) => (
				<Text key={key}>
					{key} {"->"} {ResourceNames[key]}
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
