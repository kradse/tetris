import { getCurrentShape, rotateShape } from "./shapes.js"
import { checkBorder } from "./collision.js";

export const test = (btn) => {
	console.log(btn)
}

let cursor = {x: 0, y: 0}

export const moveCursor = (e) => {
	// console.log(e.key)
	const currentShape = getCurrentShape()
	switch (e.key) {
		case 'ArrowLeft':
			var leftSide = false
			if (currentShape.style[0] == 1 ||
				currentShape.style[3] == 1 ||
				currentShape.style[6] == 1) {
				leftSide = true
			}
			if (!leftSide && cursor.x >= 0) {
				cursor.x--
			}else{
				if (cursor.x > 0) {					
					cursor.x--
				}
			}
			break;

		case 'ArrowUp':
			rotateShape()
			// cursor.y--
			break;

		case 'ArrowRight':
			var rightSide = false
			if (currentShape.style[2] == 1 ||
				currentShape.style[5] == 1 ||
				currentShape.style[8] == 1) {
				rightSide = true
			}
			if (!rightSide && cursor.x < 10) {
				cursor.x++
			}else{
				if (cursor.x < 9) {
					cursor.x++
				}
			}
			break;

		case 'ArrowDown':
			if (checkBorder(cursor, currentShape) == true) {
				cursor.y++
			}
			
			break;
	
		default:
			break;
	}
}

export const getCursor = () => {
	return cursor
}