import { createContext, useReducer, useContext, useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AppState, AppStateAction, defaultAppState } from "./types"
import { appReducer } from "./reducer"
import { Actions } from "./actions"

const AppStateContext = createContext<AppState>(defaultAppState)
const AppDispatchContext = createContext<React.Dispatch<AppStateAction> | null>(null)

export const AppContext = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, defaultAppState)

	useEffect(() => {
		// Load state
		loadStateAsync().then((state) => {
			if (!state) return

			dispatch(Actions.loadState(state))
		})
	}, [])

	return (
		<AppStateContext.Provider value={state}>
			<AppDispatchContext.Provider value={dispatch}>
				{children}
			</AppDispatchContext.Provider>
		</AppStateContext.Provider>
	)
}

export const useAppState = () => ({
	state: useContext(AppStateContext)!,
	dispatch: useContext(AppDispatchContext)!,
})

export const loadStateAsync = async (): Promise<AppState> => {
	const json = await AsyncStorage.getItem("app_state")
	const state: AppState = JSON.parse(json)
	return state
}
