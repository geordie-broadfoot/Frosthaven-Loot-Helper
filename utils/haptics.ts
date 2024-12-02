import * as Haptics from "expo-haptics"

type useHaptics = {
	buzz: () => void
}

export const useHaptics = () => {
	const buzz = async () => {
		Haptics.selectionAsync()
	}

	return {
		buzz,
	}
}
