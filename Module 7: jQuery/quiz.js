/*
 *
 * Quiz Variables
 *
*/

// quiz questions
var captainJackSparrow = "Jack Sparrow once sailed with a geezer named Larry who lost both of his arms and part of his eye.";
var elizabethSwann = "Elizabeth Swan lives in Port Ruby.";
var williamTurner = "Will Turner is the son of Bootstrap Bill.";
var pirateRagetti = "The pirate Ragetti is often seen chasing after his wooden leg.";

// check answer results
var correct = "That's correct!";
var incorrect = "Sorry, not correct...";

// boolean for is answered
var isCurrentAnswered = false;
var numAnswered = 0;
const NUMBER_OF_QUESTIONS = 4;




/*
 *
 * Part 3a - Initial State
 *
*/

// when the document loads...
$(document).ready( function() {
	initialState();	
});


// sets the initial state for when the program first loads
function initialState() {
	// category buttons enabled
	$("#captainJackSparrow").prop("enabled", true);
	$("#elizabethSwann").prop("enabled", true);
	$("#williamTurner").prop("enabled", true);
	$("#pirateRagetti").prop("enabled", true);
	
	// check answer button disabled
	$("#checkAnswer").prop("disabled", true);
	
	// call function to reset the true/false buttons
	resetTrueFalse();
	
	// sidebar list of questions is empty
	$("#questionsAnswered").empty();
}

function resetTrueFalse() {
	// neither true nor false is selected
	$("#True").prop("checked", false);
	$("#False").prop("checked", false);
}




/*
 *
 * Part 3b - Picking a Question
 *
*/

// captain jack sparrow button - display cpj question, reset true/false buttons, disable check answer, remove any results
$("#captainJackSparrow").click( function() {
	if (isCurrentAnswered || $("#questionText p").text() == "") {
		$("#questionText p").text(captainJackSparrow);
		resetTrueFalse();
		$("#checkAnswer").prop("disabled", true);
		$("#checkAnswerResult").text("");
		isCurrentAnswered = false;
	} else {
		alert("You must answer the current question.");
	}
});

// elizabeth swann button - display es question, reset true/false buttons, disable check answer, remove any results
$("#elizabethSwann").click( function() {
	if (isCurrentAnswered || $("#questionText p").text() == "") {
		$("#questionText p").text(elizabethSwann);
		resetTrueFalse();
		$("#checkAnswer").prop("disabled", true);
		$("#checkAnswerResult").text("");
		isCurrentAnswered = false;
	} else {
		alert("You must answer the current question.");
	}	
});

// william turner button - display wt question, reset true/false buttons, disable check answer, remove any results
$("#williamTurner").click( function() {
	if (isCurrentAnswered || $("#questionText p").text() == "") {
		$("#questionText p").text(williamTurner);
		resetTrueFalse();
		$("#checkAnswer").prop("disabled", true);
		$("#checkAnswerResult").text("");
		isCurrentAnswered = false;
	} else {
		alert("You must answer the current question.");
	}
});

// pirate ragettin button - display pr question, reset true/false buttons, disable check answer, remove any results
$("#pirateRagetti").click( function() {
	if (isCurrentAnswered || $("#questionText p").text() == "") {
		$("#questionText p").text(pirateRagetti);
		resetTrueFalse();
		$("#checkAnswer").prop("disabled", true);
		$("#checkAnswerResult").text("");
		isCurrentAnswered = false;
	} else {
		alert("You must answer the current question.");
	}
});




/*
 *
 * Part 3c - Checking the Answer
 *
*/

// true/false onclick listeners to enable check answer button when user has selected an answer
$("#True").click( function() {
	$("#checkAnswer").prop("disabled", false);
});

$("#False").click( function() {
	$("#checkAnswer").prop("disabled", false);
});

// onclick listener for check answer button - calls check answer function and disables check answer button
$("#checkAnswer").click( function() {
	checkAnswer();
	$("#checkAnswer").prop("disabled", true);
		
});

// function that handles checking the answer and determining if the game is over
function checkAnswer() {
	// current question was answered
	isCurrentAnswered = true;
	numAnswered = numAnswered + 1;

	// check the answer, display result, add to sidebar
	if ($("#questionText p").text() == captainJackSparrow) {
		$("#captainJackSparrow").prop("disabled", true);
		
		if ($("#True").is(":checked")) {
			$("#checkAnswerResult").text(correct).css("color", "green");
			$("#questionsAnswered").append($('<li>').text("Captain Jack Sparrow").css("color", "green"));
		} else if ($("#False").is(":checked")) {
			$("#checkAnswerResult").text(incorrect).css("color", "red");
			$("#questionsAnswered").append($('<li>').text("Captain Jack Sparrow").css("color", "red"));
		}
		
		
	} else if ($("#questionText p").text() == elizabethSwann) {
		$("#elizabethSwann").prop("disabled", true);
	
		if ($("#False").is(":checked")) {
			$("#checkAnswerResult").text(correct).css("color", "green");
			$("#questionsAnswered").append($('<li>').text("Elizabeth Swann").css("color", "green"));
		} else if ($("#True").is(":checked")) {
			$("#checkAnswerResult").text(incorrect).css("color", "red");
			$("#questionsAnswered").append($('<li>').text("Elizabeth Swann").css("color", "red"));
		}
		
		
	} else if ($("#questionText p").text() == williamTurner) {
		$("#williamTurner").prop("disabled", true);
	
		if ($("#True").is(":checked")) {
			$("#checkAnswerResult").text(correct).css("color", "green");
			$("#questionsAnswered").append($('<li>').text("William Turner").css("color", "green"));
		} else if ($("#False").is(":checked")) {
			$("#checkAnswerResult").text(incorrect).css("color", "red");
			$("#questionsAnswered").append($('<li>').text("William Turner").css("color", "red"));
		}
		
		
	} else if ($("#questionText p").text() == pirateRagetti) {
		$("#pirateRagetti").prop("disabled", true);
	
		if ($("#False").is(":checked")) {
			$("#checkAnswerResult").text(correct).css("color", "green");
			$("#questionsAnswered").append($('<li>').text("Pirate Ragetti").css("color", "green"));
		} else if ($("#True").is(":checked")) {
			$("#checkAnswerResult").text(incorrect).css("color", "red");
			$("#questionsAnswered").append($('<li>').text("Pirate Ragetti").css("color", "red"));
		}
	}
	
	// check for game over
	if (numAnswered == NUMBER_OF_QUESTIONS) {
		gameOver();
	}
	
}




/*
 *
 * Part 3d - Game Over
 *
*/

// function called inside checkAnswer that tells the user that the game is over
function gameOver() {
	$("#sidebar").append($('<p>').text("That's all folks!!!").hide());
	$("#sidebar p").show("slow", moveStuffWithColors()).fadeOut("slow");
}

// used as a callback function, contains chaining
function moveStuffWithColors() {
	$("#sidebar p").css("color", "purple")
		.css("text-decoration", "black wavy underline")
		.css("background-color", "white")
		.slideUp(8000);
}


/*
Part X - Extra Credit

Clearly there is more that can be done with this quiz.  For example, you do not need to limit your questions to be True/False type.  Up to 10 extra credit points can be earned by adding additional functionality or using additional jQuery features.  To earn these points, add the list of extra features/functionality to your README.txt.
*/



