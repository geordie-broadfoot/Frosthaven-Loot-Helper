import { Container, Txt } from "../../elements"

type Props = {
	text: string
	onClick: () => void
}

export const LootSettingButton = ({ text, onClick }: Props) => {
	return (
		<Container
			borderWidth={1}
			paddingVertical={2}
			paddingHorizontal={5}
			onClick={onClick}
			style={{
				borderRadius: 5,
			}}
			backgroundColor="#ccc"
			width={98}
			alignItems="center"
		>
			<Txt xs>{text}</Txt>
		</Container>
	)
}
