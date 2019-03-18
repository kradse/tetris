const shapes = [
	{
		style: [
			0, 1, 0,
			0, 1, 0,
			0, 1, 0
		],
		color: 1
	},
	{
		style: [
			1, 1, 0,
			1, 1, 0,
			0, 0, 0
		],
		color: 2
	},
	{
		style: [
			1, 1, 0,
			0, 1, 1,
			0, 0, 0
		],
		color: 3
	},
	{
		style: [
			0, 1, 1,
			1, 1, 0,
			0, 0, 0
		],
		color: 4
	},
	{
		style: [
			1, 1, 0,
			0, 1, 0,
			0, 1, 0
		],
		color: 5
	},
	{
		style: [
			0, 1, 1,
			0, 1, 0,
			0, 1, 0
		],
		color: 6
	}
]

let currentShape

export const spawnNewShape = () => {
	const rng = Math.floor(Math.random() * shapes.length)
	currentShape = shapes[rng]
	// return shapes[rng]
}

export const getCurrentShape = () => {
	if (currentShape == undefined) {
		spawnNewShape()
	}
	return currentShape
}