import { getShape } from "./src/shapes.js"
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

const fps = 1
const interval = 1000 / fps

const setup = () => {
	stage.interactive = true

	AnimationLoop(interval)
}

const graphics = new PIXI.Graphics()
var gameStatus = 'running'

/* Dont know how to get the anim function in a diffrent class yet */
const AnimationLoop = (fps) => {
	renderer.render(stage)

	drawShape(getShape(), graphics)
	drawMap(graphics)

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