import { LootCard } from "../consts/types"
import { getUUID } from "../utils/uuid"
import {
	AddPlayer,
	AppState,
	ClearState,
	DeletePlayer,
	LoadState,
	ResetLootDeck,
	SetLootDeck,
	SetPlayer,
	SetScreen,
	UpdateLootDeckComposition,
	UpdateOption,
	UpdatePlayer,
	SetUndrawnLoot,
} from "./types"

export const Actions = {
	addPlayer: (name: string): AddPlayer => ({
		type: "add_player",
		id: getUUID(),
		name,
	}),
	deletePlayer: (id: string): DeletePlayer => ({
		type: "delete_player",
		id,
	}),
	setNickname: (id: string, name: string): SetPlayer => ({
		type: "set_nickname",
		id,
		name,
	}),
	resetLootDeck: (): ResetLootDeck => ({
		type: "reset_loot_deck",
	}),
	setLootDeckCards: (cards: LootCard[]): SetLootDeck => ({
		type: "set_loot_deck",
		deck: cards,
	}),
	updateLootDeckComposition: (
		cardType: string,
		count: number,
	): UpdateLootDeckComposition => ({
		type: "update_loot_deck_composition",
		card: cardType,
		value: count,
	}),
	setUndrawnLootCards: (cards: LootCard[]): SetUndrawnLoot => ({
		type: "set_undrawn_loot",
		cards,
	}),
	setScreen: (screen: string): SetScreen => ({
		type: "set_screen",
		screen,
	}),
	loadState: (state: AppState): LoadState => ({
		type: "load_state",
		state,
	}),
	updatePlayer: (id: string, field: string, value: any): UpdatePlayer => ({
		type: "update_player",
		id,
		field,
		value,
	}),
	updateOption: (field: string, value: any): UpdateOption => ({
		type: "update_option",
		field,
		value,
	}),
	clearState: (): ClearState => ({ type: "clear_state" }),
}
