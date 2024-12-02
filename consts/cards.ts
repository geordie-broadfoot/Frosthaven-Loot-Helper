import { RESOURCE } from "./resources"
import { LootCard } from "./types"

/** Definition used to generate the resource cards */
const defaultResourceCards: LootCard[] = [
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
	generateGoldCard(1361, 1),
	generateGoldCard(1362, 1),
	generateGoldCard(1363, 1),
	generateGoldCard(1364, 1),
	generateGoldCard(1365, 1),
	generateGoldCard(1366, 1),
	generateGoldCard(1367, 1),
	generateGoldCard(1368, 1),
	generateGoldCard(1369, 1),
	generateGoldCard(1370, 1),
	generateGoldCard(1371, 1),
	generateGoldCard(1372, 1),
	// 6 x 2-coin cards
	generateGoldCard(1373, 2),
	generateGoldCard(1374, 2),
	generateGoldCard(1375, 2),
	generateGoldCard(1376, 2),
	generateGoldCard(1377, 2),
	generateGoldCard(1378, 2),
	// 2 x 3-coin cards
	generateGoldCard(1379, 3),
	generateGoldCard(1380, 3),
	// 2 x Special cards
	generateGoldCard(1418, 1, true),
	generateGoldCard(1419, 1, true),
]

const lumberIndex = 1401
const metalIndex = 1409
const hideIndex = 1393

/** Static definition of all base loot cards available in the game */
export const ALL_LOOT_CARDS = {
	[RESOURCE.gold]: goldCards,
	[RESOURCE.logs]: defaultResourceCards.map((c, i) => ({
		...c,
		type: RESOURCE.logs,
		id: lumberIndex + i,
		bonus: 0,
	})) as LootCard[],
	[RESOURCE.metal]: defaultResourceCards.map((c, i) => ({
		...c,
		type: RESOURCE.metal,
		id: metalIndex + i,
		bonus: 0,
	})) as LootCard[],
	[RESOURCE.furs]: defaultResourceCards.map((c, i) => ({
		...c,
		type: RESOURCE.furs,
		id: hideIndex + i,
		bonus: {},
	})) as LootCard[],
	[RESOURCE.arrowvine]: [
		generateHerbCard(1381, RESOURCE.arrowvine),
		generateHerbCard(1382, RESOURCE.arrowvine),
	],
	[RESOURCE.axenut]: [
		generateHerbCard(1383, RESOURCE.axenut),
		generateHerbCard(1384, RESOURCE.axenut),
	],
	[RESOURCE.corpsecap]: [
		generateHerbCard(1385, RESOURCE.corpsecap),
		generateHerbCard(1386, RESOURCE.corpsecap),
	],
	[RESOURCE.flamefruit]: [
		generateHerbCard(1387, RESOURCE.flamefruit),
		generateHerbCard(1388, RESOURCE.flamefruit),
	],
	[RESOURCE.rockroot]: [
		generateHerbCard(1389, RESOURCE.rockroot),
		generateHerbCard(1390, RESOURCE.rockroot),
	],
	[RESOURCE.snowthistle]: [
		generateHerbCard(1391, RESOURCE.snowthistle),
		generateHerbCard(1392, RESOURCE.snowthistle),
	],
	[RESOURCE.randomItem]: [
		{
			id: 1417,
			type: RESOURCE.randomItem,
			value: { 2: 1, 3: 1, 4: 1 },
		},
	] as LootCard[],
} as const
