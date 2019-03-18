var graphics = new PIXI.Graphics()
var gameStatus = 'running'

export const mainLoop = (fps, stage, renderer) => {
	renderer.render(stage)
	// console.log(gameStatus)
	// ctx.fillRect(40, 40, 100, 100)
	

	graphics.beginFill(0xFFFF00);

	// set the line style to have a width of 5 and set the color to red
	graphics.lineStyle(5, 0xFF0000);

	// draw a rectangle
	graphics.drawRect(0, 0, 300, 200);

	stage.addChild(graphics);


	if (gameStatus === 'running') {
		setTimeout(() => { 
			return mainLoop(fps)
		}, fps)
	}else{
		console.log('Game Ended')
		return
	}
}