import { mainLoop } from "./src/main.js"

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

let stage = new PIXI.Container()

const fps = 16
const interval = 1000 / fps

const setup = () => {
	stage.interactive = true

	/*sprite = new PIXI.Sprite(
		PIXI.loader.resources['sprite'].texture
		// PIXI.loader.resources['assets/sprite.png'].texture
	)

	sprite.interactive = true
	sprite.scale.set(10, 10)
	sprite.x = renderer.width * 0.5
	sprite.y = renderer.height * 0.5
	sprite.anchor.set(0.5, 0.5)

	sprite.click = () => {
		sprite.scale.x -= 0.1
		sprite.scale.y -= 0.1
	}

	stage.addChild(sprite)*/

	mainLoop(interval)
}



// const canvas = document.getElementById('screen')
// canvas.width = 1367
// canvas.height = 768
// canvas.style = "border:1px solid black;"




setup()
