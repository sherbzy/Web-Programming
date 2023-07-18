/*
 *
 * Part 2f - Change the "look and feel"
 *
 */
 
 function changeColor(radioButton) {
 	if (radioButton.value == "WARM") {
 		document.documentElement.setAttribute("data-theme", "warm");
 		document.getElementById("warm").blur();
 	} else if (radioButton.value == "COOL") {
 		document.documentElement.setAttribute("data-theme", "cool");
 		document.getElementById("cool").blur();
 	}
 }
 
 
 /* Questions...
 	
 	What is the name of the function that will be called when a radio button is clicked?
 		onclick="changeColor(this);"
 	What value will be passed to the function? Hint: use an alert to see the parameter. Then google something like "javascript radio button
 	value" to figure out how to get a usable value.
 		parameter name: this
 		parameter type: [object HTMLInputElement]
 		get radio button value (text) by using .value
 	
 	
 */
