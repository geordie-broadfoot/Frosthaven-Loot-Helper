import React from "react"
import { View } from "react-native"

type Props = {
	children?: any
	onClick?: any
}

export const Button = (props: Props | any) => {
	return (
		<View
			style={{
				borderWidth: 1,
				borderRadius: 15,
				paddingVertical: 5,
				paddingHorizontal: 15,
				marginHorizontal: 5,
				backgroundColor: "hsl(90, 80%, 80%)",
				alignContent: "center",
				alignItems: "center",
				justifyContent: "center",
			}}
			onTouchStart={props.onClick}
			{...props}
		>
			{props.children}
		</View>
	)
}
