import { useState } from "react"
import { RESOURCE, ResourceNames } from "../../consts/resources"
import { LootCard as LootResultCard } from "./lootCard"
import { LootCard, Player } from "../../consts/types"
import { useAppState } from "../../context/AppContext"
import { Col, Row, Txt } from "../elements"

export const LootResults = () => {
	const { state } = useAppState()

	return (
		<Col width="90%" alignItems="center" flexGrow={1}>
			<Txt xl marginBottom={20}>
				Loot Results!
			</Txt>
			<Row alignItems="flex-start" width="80%" marginBottom={5}>
				<Txt xxs>Tap to collapse</Txt>
			</Row>
			<Col width="90%" alignItems="stretch" gap={20}>
				{state.players.map((player) => {
					return <LootRow key={player.id} cards={player.cards} name={player.name} />
				})}
				{state.options.showUndrawnLoot && (
					<LootRow cards={state.lootDeck.undrawnCards} name="Undrawn" />
				)}
			</Col>
		</Col>
	)
}

type LootRowProps = {
	name: string
	cards: LootCard[]
}

const LootRow = ({ name, cards }: LootRowProps) => {
	const [expanded, setExpanded] = useState(true)

	return (
		<Col
			width="auto"
			alignItems="stretch"
			justifyContent="center"
			onClick={() => setExpanded(!expanded)}
		>
			<Row
				width="auto"
				justifyContent="space-between"
				alignItems="center"
				backgroundColor="hsl(180, 20%, 70%)"
				borderRadius={10}
				padding={1}
				paddingHorizontal={20}
			>
				<Txt lg>{name}</Txt>
				<Txt sm>
					{cards.length} loot card{cards.length !== 1 && "s"}
				</Txt>
			</Row>
			{expanded && <LootSummary cards={cards} />}
		</Col>
	)
}

type SummaryProps = {
	cards: LootCard[]
}

const LootSummary = ({ cards }: SummaryProps) => {
	const { state } = useAppState()

	return (
		<Col width="auto" justifyContent="space-around" alignItems="center">
			<Row flexWrap="wrap" gap={2} width="90%" paddingTop={2}>
				{state.options.showIndividualLootCards
					? cards.map((card) => (
							<LootResultCard
								key={card.id}
								type={card.type}
								id={card.id}
								value={card.value[state.players.length]}
							/>
					  ))
					: Object.entries(
							cards.reduce((res, card) => {
								if (!card) return res

								if (!res[card.type])
									res[card.type] = {
										count: 0,
										ids: [],
										result: 0,
									}

								res[card.type].count++
								res[card.type].ids.push(card.id)
								res[card.type].result += card.value[state.players.length]
								return res
							}, {}),
					  ).map(([type, output]: any) => {
							return (
								<LootResultCard
									key={type}
									type={type}
									value={output.result}
									ids={output.ids}
								/>
							)
					  })}
			</Row>
		</Col>
	)
}
