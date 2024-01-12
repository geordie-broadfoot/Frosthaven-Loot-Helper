import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
	row: {
		width: "auto",
		flexDirection: "row",
		justifyContent: "center",
	},
	col: {
		height: "auto",
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	wrap: {
		flexWrap: "wrap",
	},
	stretch: { alignItems: "stretch" },
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
	spaceBetween: {
		justifyContent: "space-between",
	},
	spaceAround: {
		justifyContent: "space-around",
	},
	bold: {
		fontWeight: "700",
	},
})

export default styles
