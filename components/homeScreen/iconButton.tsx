import { Button, Txt } from "../elements"

type Props = {
	onClick: () => void
	title?: string
	icon: JSX.Element
}

export const IconButton = (props: Props) => {
	return (
		<Button width="40%" {...props}>
			{props.icon}
			<Txt sm>{props.title}</Txt>
		</Button>
	)
}
