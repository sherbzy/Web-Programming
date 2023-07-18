// find the canvas element and create the drawing object
var canvas = document.getElementById("faceCanvas");
var context = canvas.getContext("2d");

// start by drawing a happy face
drawHappyFace();

let isHappy = true;	// bool value to keep track of the current face
var button = document.getElementById("faceButton");




// function that draws a happy face on the canvas
function drawHappyFace() {
	// background
	context.fillStyle = "#D9FFFF";
	context.fillRect(0, 0, 300, 400);

	// circle
	context.fillStyle = 'yellow';
	context.beginPath();
	context.arc(150, 200, 100, 0, 2 * Math.PI);
	context.fill();
	context.lineWidth = 5;
	context.strokeStyle = 'black';
	context.stroke();

	// eyes
	context.fillStyle = 'blue';
	context.beginPath();
	context.arc(120, 170, 10, 0, 2 * Math.PI);
	context.lineWidth = 1;
	context.fill();
	context.stroke();

	context.fillStyle = 'blue';
	context.beginPath();
	context.arc(180, 170, 10, 0, 2 * Math.PI);
	context.lineWidth = 1;
	context.fill();
	context.stroke();

	// mouth
	context.beginPath();
	context.arc(150, 220, 60, 0, Math.PI);
	context.lineWidth = 5;
	context.strokeStyle = 'green';
	context.stroke();
}

// Function that draws a sad face on the canvas
function drawSadFace() {
	// background
	context.fillStyle = "#D9FFFF";
	context.fillRect(0, 0, 300, 400);

	// circle
	context.fillStyle = 'yellow';
	context.beginPath();
	context.arc(150, 200, 100, 0, 2 * Math.PI);
	context.fill();
	context.lineWidth = 5;
	context.strokeStyle = 'black';
	context.stroke();

	// eyes
	context.fillStyle = 'blue';
	context.beginPath();
	context.arc(120, 170, 10, 0, 2 * Math.PI);
	context.lineWidth = 1;
	context.fill();
	context.stroke();

	context.fillStyle = 'blue';
	context.beginPath();
	context.arc(180, 170, 10, 0, 2 * Math.PI);
	context.lineWidth = 1;
	context.fill();
	context.stroke();

	// mouth
	context.beginPath();
	context.arc(150, 260, 40, Math.PI, 2 * Math.PI);
	context.lineWidth = 5;
	context.strokeStyle = 'red';
	context.stroke();
}


// add event listener to canvas
canvas.addEventListener("mousedown", getMousePos, false);

// get mouse position on click and write to console where the click was
function getMousePos(event) {
	var x = event.x;
	var y = event.y;
	
	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	console.log("x:" + x + ", y:" + y);	// print x,y coordinates of mouse
	
	// if mouse was clicked inside face
	if (inside_circle(x, y, 150, 200, 100)) {
		change_face();
		console.log("inside bounds of face");
	} else {
		console.log("outside bounds of face");
	}
}

// function used to check if the mouse click was inside the bounds of the face
function inside_circle(x, y, cx, cy, r) {
    var dx = x - cx
    var dy = y - cy
    return dx*dx + dy*dy <= r*r
}

// function to change the face drawing and the button's text
function change_face() {
	// check the current face and draw the opposite
	if (Boolean(isHappy)) {
		drawSadFace();
		isHappy = false;
		button.innerHTML = "Make Me Happy";
		
	} else {
		drawHappyFace();
		isHappy = true;
		button.innerHTML = "Make Me Sad";
	}
}

// onclick listener for button
button.onclick = function () {
	console.log("button clicked");
	change_face();
}



