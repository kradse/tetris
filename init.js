import { getCurrentShape, spawnNewShape } from "./src/shapes.js"
import { drawShape, drawMap } from "./src/renderer.js"
// import { mainLoop } from "./src/main.js"

let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
	type = "canvas"
}

PIXI.utils.sayHello(type)

let renderer = PIXI.autoDetectRenderer(384, 640, {
	transparent: true,
	resolution: 1
})

document.getElementById('display').appendChild(renderer.view)

const stage = new PIXI.Container()
const graphics = new PIXI.Graphics()
var gameStatus = 'running'

const fps = 60
const interval = 1000 / fps

let controller = {
	up: false,
	left: false,
	down: false,
	right: false,
	esc: false,
	keyListener: (e) => {
		let key_state = (e.type == 'keydown') ? true : false

		// console.log(e)

		switch (e.code) {
			case 'ArrowUp':
				controller.up = key_state
				break;

			case 'ArrowRight':
				controller.right = key_state
				break;

			case 'ArrowDown':
				controller.down = key_state
				break;

			case 'ArrowLeft':
				controller.left = key_state
				break;

			case 'Escape':
				gameStatus = 'Ended'
				break;

			case 'Space':
			// this case is only for testing
				spawnNewShape()
				break;
		
			default:
				break;
		}
	}
}

const setup = () => {
	stage.interactive = true

	window.addEventListener('keydown', controller.keyListener)
	window.addEventListener('keyup', controller.keyListener)

	AnimationLoop(interval)
}



/* Dont know how to get the anim function in a diffrent class yet */
const AnimationLoop = (fps) => {
	renderer.render(stage)

	drawMap(graphics)
	drawShape(getCurrentShape(), controller, graphics)

	stage.addChild(graphics)


	if (gameStatus === 'running') {
		setTimeout(() => { 
			return AnimationLoop(fps)
		}, fps)
	}else{
		console.log('Game Ended')
		return
	}
}

setup()