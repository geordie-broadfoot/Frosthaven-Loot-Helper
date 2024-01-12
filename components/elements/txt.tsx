import { Text, TextStyle } from "react-native"

export const FontSizes = {
	xxs: 9,
	xs: 14,
	sm: 17,
	md: 22,
	lg: 26,
	xl: 34,
	xxl: 48,
}

type Props = TextStyle & {
	children?: any

	//Font Sizes
	xxs?: boolean
	xs?: boolean
	sm?: boolean
	md?: boolean
	lg?: boolean
	xl?: boolean
	xxl?: boolean
}

export const Txt = (props: Props) => {
	let fontSize = FontSizes.md

	if (props.xs) fontSize = FontSizes.xs
	else if (props.xxs) fontSize = FontSizes.xxs
	else if (props.sm) fontSize = FontSizes.sm
	else if (props.md) fontSize = FontSizes.md
	else if (props.lg) fontSize = FontSizes.lg
	else if (props.xl) fontSize = FontSizes.xl
	else if (props.xxl) fontSize = FontSizes.xxl

	return (
		<Text
			style={{
				fontSize: fontSize,
				fontWeight: props.fontWeight,
				fontStyle: props.fontStyle,
				color: props.color,
			}}
			{...props}
		>
			{props.children}
		</Text>
	)
}
