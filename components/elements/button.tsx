import React from "react"
import { View } from "react-native"

type Props = {
	width?: number
	children?: any
	onClick?: any
	disabled?: boolean
	color?: string
}

const DisabledColor = "#aaa"

export const Button = (props: Props | any) => {
	return (
		<View
			style={{
				width: props.width,
				borderWidth: 1,
				borderRadius: 15,
				paddingVertical: 5,
				paddingHorizontal: 15,
				marginHorizontal: 5,
				backgroundColor: props.disabled
					? DisabledColor
					: props.color ?? "hsl(90, 80%, 80%)",
				alignContent: "center",
				alignItems: "center",
				justifyContent: "center",
			}}
			onTouchStart={props.disabled ? null : props.onClick}
			{...props}
		>
			{props.children}
		</View>
	)
}
