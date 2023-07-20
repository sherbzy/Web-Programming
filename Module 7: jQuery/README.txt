Module 7: jQuery


JavaScript Learning Goals
    1. Why so many companies and developers rely on jQuery.
        ◦ “write less, do more” JavaScript library
        ◦ simplifies many of the common tasks you tend to do with JavaScript
        ◦ works with other libraries and has helpful plugins
    2. How to include the jQuery library (there are two ways)
        ◦ Download the jQuery library – production version or development version
            ▪ <head>
		<script src=”jquery-3.6.0.min.js”></script>
		</head
        ◦ Include jQuery from a CDN (Content Delivery Network) – Google CDN:
            ▪ <head>
		<script src=”https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js”></script>
		</head>
    3. The general syntax for a jQuery command (selector action)
        ◦ $(selector).action()
    4. How jQuery uses the document ready function, and commands that are typically included
        ◦ $(document).ready(function() {	});
        ◦ used to prevent jQuery code from running before the document has finished loading; allows javaScript code to be placed in head section
    5. How to use jQuery selectors and how they relate to CSS
        ◦ element – $(“p”)
        ◦ id – $(“#id”)
        ◦ class – $(“.class”)
    6. What events we can handle
        ◦ $(“p”).click( function() {	});
        ◦ Mouse – click, dblclick, mouseenter, mouseleave
        ◦ Keyboard – keypress, keydown, keyup
        ◦ Form – submit, change, focus, blur
        ◦ Document/Window – load, resize, scroll, unload, ready
    7. What effects jQuery can perform
        ◦ hide, show, toggle, slide, fade, stop, and animate
        ◦ text() – sets or returns the text
        ◦ html() – sets or returns content
        ◦ val() – sets or returns the value
        ◦ attr() – used to get attribute value; also has callback function
    8. The purpose of a callback, how they work, and why they might be used
        ◦ the purpose of a callback function is to take care of a case in which certain code runs after something happens and not sequentially; asynchronous programming
        ◦ $(selector).hide(“slow”, function())
        ◦ used with event handlers to take care of events such as button clicks
    9. The purpose and syntax for chaining calls
        ◦ allows you to run multiple jQuery commands, one after the other, on the same element(s)\
        ◦ $(“#p1”).css(“color”, “red”).slideUp(2000).slideDown(2000);
    10. How to insert and remove HTML elements into the DOM
        ◦ add HTML content (can add multiple at a time)
            ▪ append() - inserts content at the end of the selected elements 
            ▪ prepend() - insert content at the beginning of the selected elements
            ▪ after() - inserts content after the selected elements
            ▪ before() - inserts content before the selected elements
        ◦ remove 
            ▪ remove() – removes the selected element (and its child elements); can filter elements
            ▪ empty() – removes the child elements from the selected element
    11. How to change CSS properties
        ◦ addClass() – adds one or more classes to the selected elements
        ◦ removeClass() – removes one or more classes from the selected elements
        ◦ toggleClass() – toggles between adding/removing classes from the selected elements
        ◦ css() – sets or returns one or more style attributes
            ▪ css(“property name”);
            ▪ css(“property name”, “value”);
            ▪ css(“property 1”:”value 1”, “property 2”:”value 2”,...)
