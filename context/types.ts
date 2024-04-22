import { ALL_LOOT_CARDS } from "../consts/cards"
import { RESOURCE } from "../consts/resources"
import { DrawResult, LootCard, Player } from "../consts/types"
import { getUUID } from "../utils/uuid"

export type AppStateAction =
	| AddPlayer
	| SetPlayer
	| SetLootDeck
	| SetDrawResults
	| ResetLootDeck
	| SetScreen
	| LoadState
	| ClearState
	| DeletePlayer
	| UpdateLootDeckComposition
	| UpdateOption
	| UpdatePlayer
	| SetUndrawnLoot

export type AddPlayer = {
	type: "add_player"
	id: string
	name: string
}
export type DeletePlayer = {
	type: "delete_player"
	id: string
}
export type SetPlayer = {
	type: "set_nickname"
	id: string
	name: string
}
export type SetLootDeck = {
	type: "set_loot_deck"
	deck: LootCard[]
}
export type SetDrawResults = {
	type: "set_draw_results"
	results: DrawResult[]
}
export type ResetLootDeck = {
	type: "reset_loot_deck"
}
export type SetScreen = {
	type: "set_screen"
	screen: string
}
export type LoadState = {
	type: "load_state"
	state: AppState
}
export type ClearState = {
	type: "clear_state"
}
export type UpdateLootDeckComposition = {
	type: "update_loot_deck_composition"
	card: string
	value: number
}
export type UpdateOption = {
	type: "update_option"
	field: string
	value: any
}
export type UpdatePlayer = {
	type: "update_player"
	id: string
	field: string
	value: any
}
export type SetUndrawnLoot = {
	type: "set_undrawn_loot"
	cards: LootCard[]
}

export type AppState = {
	players: Player[]
	lootDeck: {
		cards: LootCard[]
		composition: {
			[index: string]: number
		}
		undrawnCards: LootCard[]
	}
	drawResults: DrawResult[]
	screen: string
	options: {
		1418: boolean
		1419: boolean
		showCardIds: boolean
		showUndrawnLoot: boolean
		colorCodeLootCards: boolean
		showIndividualLootCards: boolean
		showRerollButton: boolean
		useBasicMode: boolean
		showLootNames: boolean

		colors: {
			[index: string]: string
		}
	}
}

export const defaultAppState: AppState = {
	players: [
		{
			id: getUUID(),
			name: "Player 1",
			tokens: 0,
			cards: [],
		},
		{
			id: getUUID(),
			name: "Player 2",
			tokens: 0,
			cards: [],
		},
	],
	lootDeck: {
		cards: [],
		composition: Object.keys(ALL_LOOT_CARDS).reduce(
			(obj, t) => ({
				...obj,
				[t]: 0,
			}),
			{},
		),
		undrawnCards: [],
	},
	drawResults: [],
	screen: "players",
	options: {
		1418: false,
		1419: false,

		showCardIds: false,
		showUndrawnLoot: false,
		colorCodeLootCards: false,
		showIndividualLootCards: true,
		showRerollButton: false,
		useBasicMode: false,
		showLootNames: true,

		colors: {
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
		},
	},
}
