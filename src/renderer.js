import { getMap, updateMap } from "./map.js"
import { checkBorder } from "./collision.js"
import { getCursor } from "./controller.js"

const colors = [0x000000, 0x0000FF, 0x00FF00, 0xFF0000, 0x00FFFF, 0xFFFF00, 0xFF00FF, 0xFFFFFF]

// let cursor = {x: 0, y: 0}
let timer = 0
let speed = 1000 / 60

export const drawShape = (shape, controller, graphics) => {
	let cursor = getCursor()
	// updateMap(cursor, shape)
	if (timer >= 1000) {
		cursor.y++
		checkBorder(cursor, shape, getMap())
		timer = 0
	}else{
		timer += speed
	}
	// console.log(timer)

	// if (controller.up) {
	// 	cursor.y--
	// }
	// if (controller.right) {
	// 	cursor.x++
	// }
	// if (controller.down) {
	// 	cursor.y++
	// }
	// if (controller.left) {
	// 	// if (cursor.x > 0) {
	// 	// }
	// 	cursor.x--
	// }


	graphics.beginFill(colors[shape.color])
	// graphics.drawRect(100, 100, 32, 32)
	let x = 0
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			try {
				if (shape.style[x] == 1) {
					graphics.drawRect((cursor.x + j) * 32, (cursor.y + i) * 32, 32, 32)
				}
			} catch (error) {
				
				console.log(x)
				shape.style[x]
			}
			
			x++
		}
	}
}

export const drawMap = (graphics, spriteSheet, stage) => {
	let map = getMap()
	graphics.clear()

	// map[5][0] = 3

	for (let y = 0; y < 20; y++) {
		for (let x = 0; x < 12; x++) {
			graphics.beginFill(colors[map[y][x]])
			graphics.drawRect(x * 32, y * 32, 32, 32)
			// stage.addChild(spriteSheet)
		}
	}
}