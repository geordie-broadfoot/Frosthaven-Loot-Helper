import React from "react"
import { useAppState } from "../../context/AppContext"
import { Col, Row, Txt } from "."
import { ResourceNames } from "../../consts/resources"
import * as Icon from "@expo/vector-icons"

type CounterProps = {
	name: string
	count: number
	onCountUp: () => void
	onCountDown: () => void
	min?: number
	max?: number
	color?: string
	borderWidth?: number
	disabled?: boolean
}

export const Counter = ({
	name,
	count,
	onCountDown,
	onCountUp,
	min = 0,
	max = 100,
	color,
	borderWidth,
	disabled,
}: CounterProps) => {
	const btnSize = 35

	return (
		<Col
			alignContent="stretch"
			backgroundColor={"#ccc"}
			padding={5}
			borderRadius={10}
			borderWidth={borderWidth || 1}
			style={{ borderColor: color }}
		>
			<Txt xs fontWeight="500">
				{name}
			</Txt>
			<Row alignItems="center" gap={15}>
				<Icon.Feather
					disabled={count <= min}
					name="minus"
					color={count <= min || disabled ? "grey" : "hsl(10, 70%, 60%)"}
					size={btnSize}
					onPress={() => !disabled && onCountDown()}
				/>
				<Txt lg>{count}</Txt>
				<Icon.Feather
					name="plus"
					disabled={count >= max}
					color={count >= max || disabled ? "grey" : "hsl(140, 90%, 40%)"}
					size={btnSize}
					onPress={() => !disabled && onCountUp()}
				/>
			</Row>
		</Col>
	)
}
