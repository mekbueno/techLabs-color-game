let numSquares = 6
const colors = []
let pickedColor = 0
const squares = document.querySelectorAll(".square")
const displayColor = document.querySelector('#color-display')
const messageDisplay = document.querySelector('#message')
const easyMode = document.querySelector("#easy-mode")
let resetButton = document.querySelector("#reset")

function colorHandler() {
	colorGenerator()
	pushColorsToArray()
	pickedColor = colors[randomColor()]
	displayColor.innerHTML = `${pickedColor}`
}
colorHandler()

function createSquares(numSquares) {
	for (let i = 0; i < numSquares; i++) {	
		squares[i].style.backgroundColor = colors[i]
		squares[i].addEventListener('click', (event) => {		
			const clickedColor = squares[i].style.backgroundColor

			if (pickedColor === clickedColor) {
				correctColor(clickedColor)			
			} else {
				wrongColor()
			}
			
		})
	}
}
createSquares(numSquares)

function colorGenerator() {
	const r = Math.floor(Math.random() * 256)
	const g = Math.floor(Math.random() * 256)
	const b = Math.floor(Math.random() * 256)

	return `rgb(${r}, ${g}, ${b})`
}

function randomColor() {
	const random = Math.floor(Math.random() * colors.length)

	return random
}

function pushColorsToArray() {
	for (let i = 0; i < numSquares; i++) {
		colors.push(colorGenerator())
	}
}

function correctColor(color) {
	messageDisplay.textContent = "GOTCHAA!"

	for(let i = 0; i <= squares.length; i++) {
		squares[i].style.backgroundColor = color
	}
}

function wrongColor() {
	messageDisplay.textContent = "Try again!"
}

function reset() {
	resetButton.addEventListener('click', () => {
		window.location.reload();	
	})
}
reset()
