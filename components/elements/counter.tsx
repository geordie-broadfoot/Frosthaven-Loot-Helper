import React from "react"
import { useAppState } from "../../context/AppContext"
import { Col, Row, Txt } from "."
import { ResourceIcons, ResourceNames } from "../../consts/resources"
import * as Icon from "@expo/vector-icons"
import { Image } from "react-native"

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
	icon?: any
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
	icon,
}: CounterProps) => {
	const btnSize = 35

	return (
		<Col
			alignItems="center"
			backgroundColor={"#ccc"}
			paddingHorizontal={5}
			paddingVertical={2}
			borderRadius={10}
			borderWidth={borderWidth || 1}
			style={{ borderColor: color }}
			width="35%"
		>
			<Row justifyContent="space-between" width="90%">
				<Txt xs fontWeight="500">
					{name}
				</Txt>
				{icon && (
					<Image
						source={ResourceIcons[icon]}
						tintColor="#444"
						style={{
							width: 20,
							height: 20,
							borderRadius: 3,
						}}
					/>
				)}
			</Row>
			<Row alignItems="center" justifyContent="center" width="100%">
				<Icon.Feather
					disabled={count <= min}
					name="minus"
					color={count <= min || disabled ? "grey" : "hsl(10, 70%, 60%)"}
					size={btnSize}
					onPress={() => !disabled && onCountDown()}
				/>
				<Txt lg width={30} textAlign="center">
					{count}
				</Txt>
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
