import React from "react"
import { useAppState } from "../../context/AppContext"
import { Col, Row, Txt } from "../elements"
import { RESOURCE, ResourceNames } from "../../consts/resources"
type Props = {
	type: string
	value: number
	id?: number
	ids?: number[]
}

export const CardColors = {
	[RESOURCE.gold]: "hsl(60, 70%, 45%)",
	[RESOURCE.metal]: "hsl(40, 5%, 60%)",
	[RESOURCE.logs]: "hsl(45, 40%, 40%)",
	[RESOURCE.furs]: "hsl(45, 50%, 80%)",
	[RESOURCE.arrowvine]: "hsl(120, 50%, 70%)",
	[RESOURCE.axenut]: "hsl(90, 30%, 50%)",
	[RESOURCE.corpsecap]: "hsl(160, 50%, 50%)",
	[RESOURCE.flamefruit]: "hsl(20, 40%, 50%)",
	[RESOURCE.rockroot]: "hsl(90, 15%, 50%)",
	[RESOURCE.snowthistle]: "hsl(180, 50%, 70%)",
	[RESOURCE.randomItem]: "hsl(280, 80%, 80%)",
}

export const LootCard = ({ type, value, id, ids }: Props) => {
	const { state } = useAppState()

	const allIds: number[] = []

	if (id) allIds.push(id)
	if (ids) allIds.push(...ids)

	return (
		<Col
			width={"32%"}
			justifyContent="space-around"
			alignItems="center"
			backgroundColor={
				state.options.colorCodeLootCards ? CardColors[type] : "hsl(200, 60%, 85%)"
			}
			paddingVertical={2}
			paddingLeft={5}
			paddingRight={2}
			borderRadius={3}
		>
			<Row justifyContent="space-between" width="90%" alignItems="center">
				<Txt md>{value}</Txt>
				<Txt xxs>{ResourceNames[type]}</Txt>
			</Row>
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
