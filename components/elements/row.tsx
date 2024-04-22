import { FlexStyle } from "react-native"
import { Container } from "./container"

type Props = FlexStyle & {
	backgroundColor?: string
	children?: any
	borderRadius?: number
	onClick?: any
}

export const Row = (props: Props) => {
	return (
		<Container display="flex" flexDirection="row" {...props}>
			{props.children}
		</Container>
	)
}
