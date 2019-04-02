import { updateMap, getMap } from "./map.js"
import { spawnNewShape } from "./shapes.js"

export const checkBorder = (cursor, shape) => {
	const map = getMap()
	// console.log(map)
	// if (cursor.y + 3 == 1) {
		
	// }

	// loops the y amount of time, needs to be decremented before looping
	let i = 6
	for (let y = 3; y > 0; --y) {
		for (let x = 0; x < 3; x++) {
			if (shape.style[i] == 1) { // check below
				if (cursor.y+y >= 20) {
					// console.log('hitting buttom ')
					updateMap(cursor, shape)
					cursor.y = 0
					cursor.x = 5
					spawnNewShape()
					return
				}
				if (map[cursor.y+y][cursor.x+x] > 0) {
					// console.log('colliding on tile ', i)
					updateMap(cursor, shape)
					cursor.y = 0
					cursor.x = 5
					spawnNewShape()
					return
				}
			}
			i++
		}
		i -= 6
	}

	return true
}