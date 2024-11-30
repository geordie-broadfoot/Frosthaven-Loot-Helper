import React from "react"
import { useAppState } from "../../context/AppContext"
import { Col, Row, Txt } from "../elements"
import { ResourceIcons, ResourceNames } from "../../consts/resources"
import { Image } from "react-native"
type Props = {
	type: string
	value: number
	id?: number
	ids?: number[]
}

export const LootCard = ({ type, value, id, ids }: Props) => {
	const { state } = useAppState()

	const allIds: number[] = []

	if (id) allIds.push(id)
	if (ids) allIds.push(...ids)

	return (
		<Col
			minWidth="12%"
			justifyContent="space-around"
			alignItems="stretch"
			backgroundColor={
				state.options.colorCodeLootCards
					? state.options.colors?.[type]
					: "hsl(200, 60%, 85%)"
			}
			paddingVertical={2}
			paddingHorizontal={5}
			borderRadius={3}
		>
			<Row justifyContent="space-between" alignItems="center">
				<Txt md>{value}</Txt>
				<Image
					source={ResourceIcons[type]}
					tintColor="#333"
					style={{ height: 24, width: 24 }}
				/>
			</Row>
			{state.options.showLootNames && <Txt xxs>{ResourceNames[type]}</Txt>}
			<Row width="80%" gap={5} justifyContent="space-around">
				{allIds
					.filter((id) => id === 1418 || id === 1419)
					.map((id) => (
						<Txt key={id} color="red" fontWeight="200" xxs>
							{id}
						</Txt>
					))}
			</Row>
			{state.options.showCardIds && (
				<Row width="90%">
					<Txt xxs fontStyle="italic" color="hsl(0, 15%, 30%)">
						{allIds.join(", ")}
					</Txt>
				</Row>
			)}
		</Col>
	)
}
