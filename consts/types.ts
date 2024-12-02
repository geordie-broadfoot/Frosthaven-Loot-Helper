import { RESOURCE } from "./resources"

export type DrawResult = {
	playerId: number
	cards: LootCard[]
}

export type LootCard = {
	// Card id for reference
	id: number
	// Resource type
	type: RESOURCE

	// Allow mapping of player count to resource value
	value: Record<number, number>
	special?: boolean
}

export type Player = {
	id: string
	name: string
	tokens: number
	cards: LootCard[]
}

export type CardBonus = {
	bonusType: string
	resource: RESOURCE
	value: number
}
