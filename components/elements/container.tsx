import { FlexStyle, StyleSheet, View } from "react-native"

type Props = FlexStyle & {
	children?: any
	style?: any
	backgroundColor?: string
	onClick?: any
}

export const Container = (props: Props) => {
	const style = StyleSheet.create({
		container: {
			padding: 0,
			margin: 0,
			alignItems: "flex-start",
			justifyContent: "flex-start",

			...props,
			...props.style,
		},
	})

	return (
		<View onTouchStart={props.onClick} style={style.container}>
			{props.children}
		</View>
	)
}
