var gameStatus = 'running'

export const mainLoop = (fps) => {
	// renderer.render(stage)
	// console.log(gameStatus)


	if (gameStatus === 'running') {
		setTimeout(() => { 
			return mainLoop(fps)
		}, fps)
	}else{
		console.log('Game Ended')
		return
	}
}