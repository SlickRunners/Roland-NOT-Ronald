var numSquares = 6;
var goalColor;
var colors = generateRandomNumbers(numSquares);
var squares = document.querySelectorAll(".square");
var goalDisplay = document.querySelector("#goal");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();	
	setupSquares();
	resetGame();
}

function setupModeButtons(){
	// mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			resetGame();
		});
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++) {
		//click listeners to squares
		squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
			if (clickedColor === goalColor){
				messageDisplay.textContent = "Correct!"
				changeColors(clickedColor);
				// h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?"
				goalDisplay.textContent = goalColor;
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";
			}	
		});
	}
}

function resetGame(){
	//generate new colors
	colors = generateRandomNumbers(numSquares);
	//pick new goal color
	goalColor = pickColor();
	//change colorDisplay to match pickedColor
	goalDisplay.textContent = goalColor;
	//change colors of squares on the 
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	// h1.style.background = "#232323";
	messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
	resetGame();
	resetButton.textContent = "New Colors";
});

function changeColors(color){
	//loop through all squares to match correct color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	};
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomNumbers(num){
	//create an array
	var array = []
	//add num random colors to array
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color, push to array
		array.push(randomColor())
	}
	//return that array
	return array;
}

function randomColor(){
	//pick a red from 0 - 255 and the same for green and blue
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

var name = $("#name");
