const shapes = [
	{
		style: [
			0, 1, 0,
			0, 1, 0,
			0, 1, 0
		],
		color: 1,
		name: "i"
	},
	{
		style: [
			0, 0, 0,
			1, 1, 0,
			1, 1, 0
		],
		color: 2,
		name: "o"
	},
	{
		style: [
			0, 0, 0,
			1, 1, 0,
			0, 1, 1
		],
		color: 3,
		name: "z"
	},
	{
		style: [
			0, 0, 0,
			0, 1, 1,
			1, 1, 0
		],
		color: 4,
		name: "s"
	},
	{
		style: [
			0, 1, 0,
			0, 1, 0,
			1, 1, 0
		],
		color: 5,
		name: "j"
	},
	{
		style: [
			0, 1, 0,
			0, 1, 0,
			0, 1, 1
		],
		color: 6,
		name: "l"
	}
	,
	{
		style: [
			0, 0, 0,
			0, 1, 0,
			1, 1, 1
		],
		color: 7,
		name: "t"
	}
]

let currentShape

export const spawnNewShape = () => {
	const rng = Math.floor(Math.random() * shapes.length)
	currentShape = shapes[rng]
	// currentShape = shapes[1]
	// return shapes[rng]
}

export const getCurrentShape = () => {
	if (currentShape == undefined) {
		spawnNewShape()
	}
	return currentShape
}