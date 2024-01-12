import { ALL_LOOT_CARDS } from "../../consts/cards"
import { RESOURCE } from "../../consts/resources"
import { LootCard } from "../../consts/types"

export const generateLootDeck = (composition, options): LootCard[] => {
	const deck = []

	Object.entries(composition).forEach(([type, number]: any) => {
		let subset = [...ALL_LOOT_CARDS[type]]

		if (type === RESOURCE.gold) {
			if (!options[1418]) subset = subset.filter((c) => c.id !== 1418)
			if (!options[1419]) subset = subset.filter((c) => c.id !== 1419)
		}

		for (let i = 0; i < number; i++) {
			const index = Math.floor(Math.random() * subset.length)

			deck.push(subset[index])
			subset.splice(index, 1)
		}
	})

	return deck
}
