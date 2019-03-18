import { getMap, updateMap } from "./map.js"

const colors = [0x000000, 0x0000FF, 0x00FF00, 0xFF0000, 0x00FFFF, 0xFFFF00, 0xFF00FF]

let cursor = {x: 0, y: 0}
let timer = 0
let speed = 1000 / 60

export const drawShape = (shape, controller, graphics) => {
	// updateMap(cursor, shape)
	if (timer >= 1000) {
		cursor.y++
		timer = 0
	}else{
		timer += speed
	}
	// console.log(timer)

	if (controller.up) {
		cursor.y--
	}
	if (controller.right) {
		cursor.x++
	}
	if (controller.down) {
		cursor.y++
	}
	if (controller.left) {
		cursor.x--
	}

	graphics.beginFill(colors[shape.color])
	// graphics.drawRect(100, 100, 32, 32)
	let x = 0
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (shape.style[x] == 1) {
				graphics.drawRect((cursor.x + j) * 32, (cursor.y + i) * 32, 32, 32)
			}
			x++
		}
	}
}

export const drawMap = (graphics) => {
	let map = getMap()
	graphics.clear()

	for (let y = 0; y < 20; y++) {
		for (let x = 0; x < 12; x++) {
			graphics.beginFill(colors[map[y][x]])
			graphics.drawRect(x * 32, y * 32, 32, 32)
		}
	}
}