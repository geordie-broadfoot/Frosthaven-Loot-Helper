import AsyncStorage from "@react-native-async-storage/async-storage"
import { AppState, AppStateAction, defaultAppState } from "./types"

export const appReducer = (oldState: AppState, action: AppStateAction): AppState => {
	let state = { ...oldState }

	switch (action.type) {
		case "add_player":
			if (state.players.length < 4)
				state.players = [
					...state.players,
					{ id: action.id, name: action.name, tokens: 0, cards: [] },
				]
			break
		case "delete_player":
			state.players = state.players.filter((p) => p.id !== action.id)
			break
		case "set_nickname":
			state.players = state.players.map((p) => {
				if (p.id === action.id) p.name = action.name
				return p
			})
			break
		case "reset_loot_deck":
			state = {
				...defaultAppState,
				players: state.players,
				options: state.options,
			}
			break
		case "set_loot_deck":
			state.lootDeck.cards = action.deck
			break
		case "update_loot_deck_composition":
			state.lootDeck.composition[action.card] = action.value
			break
		case "set_draw_results":
			state.drawResults = action.results
			break
		case "set_screen":
			state.screen = action.screen
			break
		case "load_state":
			state = action.state
			break
		case "clear_state":
			state = defaultAppState
			break
		case "update_option":
			state.options[action.field] = action.value
			break
		case "update_player":
			state.players = state.players.map((p) => {
				if (p.id === action.id) p[action.field] = action.value
				return p
			})
			break
		case "set_undrawn_loot":
			state.lootDeck.undrawnCards = action.cards
			break
	}

	saveStateAsync(state)

	return state
}

const saveStateAsync = async (state: AppState): Promise<void> => {
	await AsyncStorage.setItem("app_state", JSON.stringify(state))
}
