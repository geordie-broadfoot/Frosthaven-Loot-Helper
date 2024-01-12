import { FlexStyle } from "react-native"
import { Container } from "./container"

type Props = FlexStyle & {
	children?: any
	backgroundColor?: string
	borderRadius?: number
	onPress?: any
	onClick?: any
	style?: any
}

export const Col = (props: Props) => {
	return (
		<Container flexDirection="column" {...props}>
			{props.children}
		</Container>
	)
}
