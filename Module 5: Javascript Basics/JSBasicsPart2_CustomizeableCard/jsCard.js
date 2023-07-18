/*
 *
 * Part 2a - Changing the "To" field
 *
 */

var toField = document.getElementById("to_field");

// event listener to handle user pressing enter key
toField.addEventListener('keypress', function (e) {
	if (e.key == "Enter") {
		updateToField();
	}
});

// event listener to handle user clicking outside of the input field
toField.addEventListener('blur', function (e) {
	updateToField();
});

// function to update the to field
function updateToField() {
	var newValue = toField.value;
	// console.log("updating to field with " + newValue);
	document.getElementById("toField").innerHTML = newValue;
}


/*
 *
 * Part 2b - Changing the card image
 *
 */

var dropdown = document.getElementById("picture");

// event listener to handle clicking on the dropdown menu
dropdown.addEventListener("change", function (e) {
	updatePicture(dropdown.value);
});

function updatePicture(text) {
	// console.log("updating the picture with " + text);
	document.getElementById("thePicture").src = "images/" + text + ".jpg";
	document.getElementById("picture").blur();
}

/*
 *
 * Part 2c - Display and move an image
 *
 */

// cat image variables
const cat_img = new Image();
var cat_x = 0;
var cat_y = 0;
var move_distance = 5;

// canvas variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

// draws the cat image on the canvas when the window is loaded
window.onload = function () {
	// console.log("loading canvas cat image");
	cat_img.src = "images/crazycat.gif";
	cat_img.onload = function () {
		ctx.drawImage(cat_img, cat_x, cat_y);
	}
	
	// console.log("drawing canvas text");
	showText();
}

// check for keydown events
document.onkeydown = function (e) {
	// the following switch statement checks for an arrow key and for it's direction
	switch(e.key) {
		case "ArrowDown":
			// console.log("down arrow pressed");
			ctx.clearRect(cat_x, cat_y, cat_img.width, cat_img.height);
			if (cat_y + move_distance + cat_img.height <= CANVAS_HEIGHT) {
				cat_y += move_distance;
			}
			break;
		case "ArrowUp":
			// console.log("up arrow pressed");
			ctx.clearRect(cat_x, cat_y, cat_img.width, cat_img.height);
			if (cat_y - move_distance >= 0) {
				cat_y -= move_distance;
			}
			break;
		case "ArrowRight":
			// console.log("right arrow pressed");
			ctx.clearRect(cat_x, cat_y, cat_img.width, cat_img.height);
			if (cat_x + move_distance + cat_img.width <= CANVAS_WIDTH) {
				cat_x += move_distance;
			}
			break;
		case "ArrowLeft":
			// console.log("left arrow pressed");
			ctx.clearRect(cat_x, cat_y, cat_img.width, cat_img.height);
			if (cat_x - move_distance >= 0) {
				cat_x -= move_distance;
			}
			break;
		default:
			// console.log("some other unimportant key pressed");
	}
	
	// redraw the image using the new coordinates
	ctx.drawImage(cat_img, cat_x, cat_y);
	
	// check if the image location is within 5 units of the text location
	var img_txt_x = CANVAS_WIDTH - cat_img.width - cat_x;
	var img_txt_y = CANVAS_HEIGHT - cat_img.height - cat_y;
	
	if (!isTextChanged) {	// check if the text was already changed to avoid unnecessary alerts and calculations
		if (img_txt_x < move_distance && img_txt_y < move_distance) {
			console.log("changing css styles of \"you\" class");
			imageMeetsText();
			isTextChanged = true;
		}
	}
}


/*
 *
 * Part 2d - Text on the canvas
 *
 */
 
 // function to draw text in the canvas, called in window.onload
 function showText() {
	ctx.font = "20px Georgia";
	var text = "Here Kitty";
	var text_x = CANVAS_WIDTH - ctx.measureText(text).width;
	var text_y = CANVAS_HEIGHT - (ctx.measureText(text).actualBoundingBoxAscent + ctx.measureText(text).actualBoundingBoxDescent);
	// console.log("coordinates:(" + text_x + "," + text_y + ")");
 	ctx.fillText("Here Kitty", text_x, text_y);
 }
 
 /*
 *
 * Part 2e - Image meets text
 *
 */

// variable to keep track of whether or not the "you" text has been changed 
var isTextChanged = false;

// function to change the css styles of the class "you", called in document.onkeydown
function imageMeetsText() {
	// get collection of class you
	const youCollection = document.getElementsByClassName("you");
	
	// loop through the collection and change 2 css styles
	for (let i = 0; i < youCollection.length; i++) {
		youCollection[i].style.color = "blue";
		youCollection[i].style.textDecoration = "underline solid #00008B";
	}
	
	// display an alert
	alert("You are amazing and I hope you have a wonderful day :)");
}











