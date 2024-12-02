import { ALL_LOOT_CARDS } from "./cards"
import { RESOURCE } from "./resources"

export type Scenario = {
	number: number
	loot: Record<RESOURCE, number>
}

const validateScenarioInputs = (scenario: Scenario) => {
	Object.entries(scenario.loot).forEach(([type, count]) => {
		const maxOfType = ALL_LOOT_CARDS[type].length

		if (count > maxOfType)
			throw new Error(
				`Cannot register scenario '${scenario.number}' - too many resources of type '${type}' - ${count} (max: ${maxOfType})`,
			)
	})
}

const genScenario = (
	title: string,
	number: number,
	gold: number,
	logs: number,
	metal: number,
	furs: number,
	arrowvine: number,
	axenut: number,
	corpsecap: number,
	flamefruit: number,
	rockroot: number,
	snowthistle: number,
	randomItem: number,
) => {
	const scenario = {
		title,
		number,
		loot: {
			[RESOURCE.gold]: gold,
			[RESOURCE.logs]: logs,
			[RESOURCE.metal]: metal,
			[RESOURCE.furs]: furs,
			[RESOURCE.arrowvine]: arrowvine,
			[RESOURCE.axenut]: axenut,
			[RESOURCE.corpsecap]: corpsecap,
			[RESOURCE.flamefruit]: flamefruit,
			[RESOURCE.rockroot]: rockroot,
			[RESOURCE.snowthistle]: snowthistle,
			[RESOURCE.randomItem]: randomItem,
		},
	} satisfies Scenario

	validateScenarioInputs(scenario)

	return scenario
}

export const SCENARIOS = [
	genScenario("Sample Scernario", 1, 22, 8, 8, 8, 2, 2, 2, 2, 2, 2, 1),
]

console.log(SCENARIOS)
