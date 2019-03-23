import { getCurrentShape, spawnNewShape } from "./src/shapes.js"
import { drawShape, drawMap } from "./src/renderer.js"
import { test, moveCursor } from "./src/controller.js"
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
// const texture = new PIXI.Texture()
var gameStatus = 'running'
let spriteSheet

const fps = 60
const interval = 1000 / fps

/*let controller = {
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
				if (gameStatus == 'running') {
					gameStatus = 'Ended'
				}else{
					gameStatus = 'running'
				}
				break;

			case 'Space':
			// this case is only for testing
				spawnNewShape()
				break;
		
			default:
				break;
		}
	}
}*/

/*const onClick = (event) => {
	switch (event.key) {
		case 'w':
			test(event)
			// movePlayer(0, -1)
			break;

		case 'd':
			// movePlayer(1, 0)
			break;
	
		case 's':
			// movePlayer(0, 1)
			break;

		case 'a':
			// movePlayer(-1, 0)
			break;

		default:
			break;
	}
}*/


const setup = () => {
	spriteSheet = new PIXI.Sprite(
		PIXI.loader.resources['spriteSheet'].texture
		// PIXI.loader.resources['assets/sprite.png'].texture
	)

	stage.interactive = true

	window.addEventListener("keydown", function onPress(event) {
		moveCursor(event)
		// onClick(event)
	})
	// window.addEventListener('keydown', moveCursor())
	// window.addEventListener('keyup', controller.keyListener)

	AnimationLoop(interval)
}

const controller = ''

/* Dont know how to get the anim function in a diffrent class yet */
const AnimationLoop = (fps) => {
	renderer.render(stage)

	drawMap(graphics, spriteSheet, stage)
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

// setup()

PIXI.loader
	// .add('')
	.add('spriteSheet','./assets/spriteSheet.png')
	.load(setup)