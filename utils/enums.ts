export const getEnumKeys = (e) => {
	return Object.keys(e).filter((k) => isNaN(Number(k)))
}
