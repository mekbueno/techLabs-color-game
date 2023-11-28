let numSquares = 6
console.log(">>numSquares ", numSquares)

let easyMode = document.querySelector("#easy-mode")
easyMode.addEventListener('click', () => {
	numSquares = 3
	window.location.reload();
	createSquares(numSquares)
	
})

let colors = []
for (let i = 0; i < numSquares; i++) {
	colors.push(colorGenerator())
}

let squares = document.querySelectorAll(".square")
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

const pickedColor = colors[randomColor()]
function randomColor() {
	const random = Math.floor(Math.random() * colors.length)

	return random
}

const messageDisplay = document.querySelector('#message')
const displayColor = document.querySelector('#color-display')

displayColor.innerHTML = `${pickedColor}`

function correctColor(color) {
	messageDisplay.textContent = "GOTCHAA!"

	for(let i = 0; i <= squares.length; i++) {
		squares[i].style.backgroundColor = color
	}
}

function wrongColor() {
	messageDisplay.textContent = "Try again!"
}


let resetButton = document.querySelector("#reset")
resetButton.addEventListener('click', () => {
	window.location.reload();	
})
