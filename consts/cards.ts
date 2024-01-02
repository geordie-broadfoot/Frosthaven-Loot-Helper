import { RESOURCE } from "./resources"

export type LootCard = {
	// Card id for reference
	id: number
	// Resource type
	type: RESOURCE

	// Allow mapping of player count to resource value
	value: {
		[index: number]: number
	}
	special?: boolean
}

const defaultResourceCards = [
	{
		id: -1,
		type: RESOURCE.logs,
		value: {
			2: 1,
			3: 1,
			4: 1,
		},
	},
	{
		id: -1,
		type: RESOURCE.logs,
		value: {
			2: 1,
			3: 1,
			4: 1,
		},
	},
	{
		id: -1,
		type: RESOURCE.logs,
		value: {
			2: 2,
			3: 2,
			4: 1,
		},
	},
	{
		id: -1,
		type: RESOURCE.logs,
		value: {
			2: 2,
			3: 2,
			4: 1,
		},
	},
	{
		id: -1,
		type: RESOURCE.logs,
		value: {
			2: 2,
			3: 2,
			4: 1,
		},
	},
	{
		id: -1,
		type: RESOURCE.logs,
		value: {
			2: 2,
			3: 1,
			4: 1,
		},
	},
	{
		id: -1,
		type: RESOURCE.logs,
		value: {
			2: 2,
			3: 1,
			4: 1,
		},
	},
	{
		id: -1,
		type: RESOURCE.logs,
		value: {
			2: 2,
			3: 1,
			4: 1,
		},
	},
]

const generateGoldCard = (id: number, value: number, special = false): LootCard => ({
	id,
	type: RESOURCE.gold,
	value: {
		2: value,
		3: value,
		4: value,
	},
	special,
})

const generateHerbCard = (id: number, type: RESOURCE): LootCard => ({
	id,
	value: {
		2: 1,
		3: 1,
		4: 1,
	},
	type,
})

const goldCards: LootCard[] = [
	// 12 x 1-coin cards
	generateGoldCard(-1, 1),
	generateGoldCard(-1, 1),
	generateGoldCard(-1, 1),
	generateGoldCard(-1, 1),
	generateGoldCard(-1, 1),
	generateGoldCard(-1, 1),
	generateGoldCard(-1, 1),
	generateGoldCard(-1, 1),
	generateGoldCard(-1, 1),
	generateGoldCard(-1, 1),
	generateGoldCard(-1, 1),
	generateGoldCard(-1, 1),
	// 6 x 2-coin cards
	generateGoldCard(-1, 2),
	generateGoldCard(-1, 2),
	generateGoldCard(-1, 2),
	generateGoldCard(-1, 2),
	generateGoldCard(-1, 2),
	generateGoldCard(-1, 2),
	// 2 x 3-coin cards
	generateGoldCard(-1, 3),
	generateGoldCard(-1, 3),
	// 2 x Special cards
	generateGoldCard(1418, 1, true),
	generateGoldCard(1419, 1, true),
]

export const ALL_LOOT_CARDS = {
	[RESOURCE.gold]: goldCards,
	[RESOURCE.logs]: defaultResourceCards.map((c) => ({ ...c, type: RESOURCE.logs })),
	[RESOURCE.metal]: defaultResourceCards.map((c) => ({ ...c, type: RESOURCE.metal })),
	[RESOURCE.furs]: defaultResourceCards.map((c) => ({ ...c, type: RESOURCE.furs })),
	[RESOURCE.arrowvine]: [generateHerbCard(-1, RESOURCE.arrowvine), generateHerbCard(-1, RESOURCE.arrowvine)],
	[RESOURCE.axenut]: [generateHerbCard(-1, RESOURCE.axenut), generateHerbCard(-1, RESOURCE.axenut)],
	[RESOURCE.corpsecap]: [generateHerbCard(-1, RESOURCE.corpsecap), generateHerbCard(-1, RESOURCE.corpsecap)],
	[RESOURCE.flamefruit]: [generateHerbCard(-1, RESOURCE.flamefruit), generateHerbCard(-1, RESOURCE.flamefruit)],
	[RESOURCE.rockroot]: [generateHerbCard(-1, RESOURCE.rockroot), generateHerbCard(-1, RESOURCE.rockroot)],
	[RESOURCE.snowthistle]: [generateHerbCard(-1, RESOURCE.snowthistle), generateHerbCard(-1, RESOURCE.snowthistle)],
	[RESOURCE.randomItem]: [
		{
			id: -1,
			type: RESOURCE.randomItem,
			value: { 2: 1, 3: 1, 4: 1 },
		},
	],
}
