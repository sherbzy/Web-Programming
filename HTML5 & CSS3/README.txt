HTML5 & CSS Module

Project Questions and Answers:
1. With your screen wide enough so all menu items are displayed, what happens if you comment out float: left for the topnav anchors?
	If I comment out "float: left" for the topnav anchors, the menu items are all displayed as a vertical list instead of horizontally.

2. Continuing, what happens if you comment out both float: left and display: block?
	If both "float: left" and "display: block" are both commented out, then the menu items are displayed as a horizontal list. Note that
	they end up much smaller than they originally were.

3. Shrink the width of your page. Why is the hamburger icon only displayed when the screen is small? (i.e., explain what lines of CSS do this... cut-and-paste lines of code as needed)
	The hamburger icon is only displayed when the screen is small because if the screen is large, all menu items can be displayed on the
	screen. The hamburger icon indicates that there are more menu options for the user to choose from. The following lines of code hide
	all links except for the first one and display the hamburger icon (a.icon) if the screen is less than 600px wide.
	
		@media screen and (max-width: 600px) {
			.topnav a:not(:first-child) {display: none;}
			.topnav a.icon {
				float: right;
				display: block;
			}
		}

4. Why does only the Home menu option display when the screen is small? (again, the CSS code)
	Looking at the css code above, the Home menu option (:first-child) is the only menu option that displays when the screen is small so
	to indicate which page the user is currently on and because the other menu options will not all fit on the screen.
	
5. Although we haven't yet studied JavaScript, take a look at the JS code and try to explain what that code is doing. Do NOT just copy the comment line... be more specific. Ask on piazza if needed. Hints:
        -- You may not understand getElementById, but where do you see "myTopNav"? So what do you think this is doing?
        -- x.className appears to be doing something related to the class of an item. Look at the CSS... where do you see items that seem related to this code?
        -- Practice being a code sleuth - that 'aha' moment is really fun!
        
	I am not entirely sure if we are supposed to be writing our answers to this question, but it looks like the first variable that uses
	.getElementById is using the id of the navigation div, "myTopNav", to access the elements inside. Then, the if-statement checks to see
	if the class name of "myTopNav" is equal to "topnav". If it is, then " responsive" is added to the class name and if not, then the
	class name is set to "topnav". In the css, the .responsive is used to change the visuals of the top navigation when the screen size is
	changed.
	
 	function myFunction() {
  		var x = document.getElementById("myTopnav");
  		if (x.className === "topnav") {
    		x.className += " responsive";
  		} else {
    		x.className = "topnav";
  		}
	} 



HTML5 + CSS3 Learning Goals
    1. Pseudo-class and pseudo-element
        ◦ Pseudo-class – styles a special state of an elements (selector:pseudo-class)
            ▪ :link, :visited, :hover, :active
        ◦ Pseudo-element – styles specified parts of an element (selector::pseudo-element)
            ▪ ::first-line
    2. How HTML5 semantic tags are used
        ◦ semantics – the meaning of a word, phrase, sentence, or text
        ◦ semantic tags – <article>, <header>, <section>, <nav>
    3. How to create a responsive websites
        ◦ should resize, hide, shrink, enlarge, or move the content to make it look good on any screen
    4. How to properly size responsive elements
    5. The purpose and use of media queries
        ◦ media queries allow you to create different layouts depending on the size of the viewport (@media)
    6. Important techniques to make websites accessible
        ◦ alt text for images
        ◦ colors with good contrast
        ◦ menus
        ◦ keyboard compatibility – in case of mouse failure
