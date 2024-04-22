import React from "react"

import * as Icon from "@expo/vector-icons"
import { useAppState } from "../../context/AppContext"
import { Button, Col, Row, Toggle, Txt } from "../elements"
import { Actions } from "../../context/actions"
import { GroupLoopButton } from "./buttons/groupLootButton"
import { ShowNamesButton } from "./buttons/showNamesButton"
import { ShowColorsButton } from "./buttons/showColorsButton"
import { ShowUndrawnLootButton } from "./buttons/showUndrawnLootButton"

type Props = {
	reroll(): void
}

export const LootBottomBar = (props: Props) => {
	const { state, dispatch } = useAppState()

	return (
		<Row
			width="100%"
			alignItems="center"
			justifyContent="space-evenly"
			paddingHorizontal={10}
			paddingTop={5}
			marginTop={3}
			marginBottom={10}
			borderTopWidth={1}
		>
			<Row gap={-8}>
				<Button
					width={90}
					color="hsla(60, 30%, 95%, 1)"
					onClick={() => {
						dispatch(Actions.setScreen("loot"))
						for (let p of state.players) dispatch(Actions.updatePlayer(p.id, "cards", []))
						dispatch(Actions.setUndrawnLootCards([]))
					}}
				>
					<Icon.FontAwesome5 name="arrow-left" size={18} />
					<Txt xxs>Back to Tokens</Txt>
				</Button>
				{state.options.showRerollButton && (
					<Button
						onClick={() => {
							props.reroll()
						}}
					>
						<Icon.FontAwesome5 name="dice" size={18} />
						<Txt xxs>Reroll</Txt>
					</Button>
				)}
			</Row>
			<Row justifyContent="flex-end" gap={2} flexWrap="wrap" width="60%">
				{!state.options.useBasicMode && (
					<>
						<GroupLoopButton />
						<ShowNamesButton />
						<ShowColorsButton />
						<ShowUndrawnLootButton />
					</>
				)}
			</Row>
		</Row>
	)
}
