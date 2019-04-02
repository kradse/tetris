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

export const rotateShape = () => {
	let newShape = []
	newShape[0] = currentShape.style[2]
	newShape[1] = currentShape.style[5]
	newShape[2] = currentShape.style[8]
	newShape[3] = currentShape.style[1]
	newShape[4] = currentShape.style[4]
	newShape[5] = currentShape.style[7]
	newShape[6] = currentShape.style[0]
	newShape[7] = currentShape.style[3]
	newShape[8] = currentShape.style[6]

	currentShape.style = newShape
}