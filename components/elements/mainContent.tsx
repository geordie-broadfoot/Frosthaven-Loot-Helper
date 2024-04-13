import { ScrollView } from "react-native"

export const MainContent = (props: any) => {
	return (
		<ScrollView
			contentContainerStyle={{
				alignItems: "center",
			}}
			style={{
				flexGrow: 1,
				width: "100%",
			}}
		>
			{props.children}
		</ScrollView>
	)
}
