export enum RESOURCE {
	gold = "gold",
	logs = "logs",
	metal = "metal",
	furs = "furs",
	arrowvine = "arrowvine",
	axenut = "axenut",
	corpsecap = "corpsecap",
	flamefruit = "flamefruit",
	rockroot = "rockroot",
	snowthistle = "snowthistle",
	randomItem = "randomItem",
}

export const ResourceNames = {
	[RESOURCE.gold]: "Gold",
	[RESOURCE.logs]: "Logs",
	[RESOURCE.metal]: "Metal",
	[RESOURCE.furs]: "Furs",
	[RESOURCE.arrowvine]: "Arrowvine",
	[RESOURCE.axenut]: "Axenut",
	[RESOURCE.corpsecap]: "Corpsecap",
	[RESOURCE.flamefruit]: "Flamefruit",
	[RESOURCE.rockroot]: "Rockroot",
	[RESOURCE.snowthistle]: "Snowthistle",
	[RESOURCE.randomItem]: "Random Item",
}

export const ResourceIcons = {
	[RESOURCE.gold]: require("../assets/gold_64.png"),
	[RESOURCE.logs]: require("../assets/logs_64.png"),
	[RESOURCE.metal]: require("../assets/metal_64.png"),
	[RESOURCE.furs]: require("../assets/furs_64.png"),
	[RESOURCE.arrowvine]: require("../assets/arrowvine_64.png"),
	[RESOURCE.axenut]: require("../assets/axenut_64.png"),
	[RESOURCE.corpsecap]: require("../assets/corpsecap_64.png"),
	[RESOURCE.flamefruit]: require("../assets/flamefruit_64.png"),
	[RESOURCE.rockroot]: require("../assets/rockroot_64.png"),
	[RESOURCE.snowthistle]: require("../assets/snowthistle_64.png"),
	[RESOURCE.randomItem]: require("../assets/random_item_64.png"),
}
