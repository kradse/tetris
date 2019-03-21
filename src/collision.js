import { updateMap } from "./map.js"
import { spawnNewShape } from "./shapes.js"

export const checkBorder = (cursor, shape, map) => {
	// console.log(map)
	// if (cursor.y + 3 == 1) {
		
	// }

	// loops the y amount of time, needs to be decremented before looping
	let i = 6
	for (let y = 3; y > 0; --y) {
		for (let x = 0; x < 3; x++) {
			if (shape.style[i] == 1) { // check below
				if (cursor.y+y == 20) {
					// console.log('hitting buttom ')
					updateMap(cursor, shape)
					cursor.y = 0
					spawnNewShape()
					return 
				}
				if (map[cursor.y+y][cursor.x+x] > 0) {
					// console.log('colliding on tile ', i)
					updateMap(cursor, shape)
					cursor.y = 0
					spawnNewShape()
					return 
				}
			}
			i++
		}
		i -= 6
	}



	
	// for (let i = 0; i < 3; i++) {
	// 	if (shape.style[6+i] == 1) {
	// 		if (map[cursor.y+3][cursor.x+i] == 1) {
	// 			// console.log('hi')
	// 			updateMap(cursor, shape)
	// 			cursor.y = 0
	// 			spawnNewShape()
	// 		}
	// 	}
	// }
	// if (cursor.y == 17) { // find out how to change this to 18
	// 	updateMap(cursor, shape)
	// 	cursor.y = 0
	// 	spawnNewShape()
	// }



	/*switch (shape.name) {
		case "i":
			
			break;
	
		case "o":
			
			break;

		case "z":
			
			break;

		case "s":
			
			break;

		case "j":
			
			break;

		case "l":
			
			break;

		default:
			break;
	}*/
}