Module 5: Javascript Basics


JavaScript Learning Goals
    1. What the DOM is and how it relates to HTML
        ◦ The Document Object Model defines a standard for accessing documents and has 3 different parts: Core DOM, XML DOM, HTML DOM
        ◦ The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
    2. How JavaScript and the DOM interact
        ◦ The HTML DOM allows JavaScript to change the content and css styles of HTML elements
    3. The list of DOM data types
        ◦ object – HTML element
        ◦ method – an action you can do
        ◦ property – a value you can get or set
    4. What three HTML components JavaScript can modify
        ◦ HTML content
        ◦ HTML attribute
        ◦ HTML styles (CSS)
    5. The four ways JavaScript can provide output
        ◦ innerHTML – writing into HTML element
        ◦ document.write() – writing into HTML output (deletes existing HTML if used after HTML document is loaded
        ◦ window.alert() – writing into an alert box
        ◦ console.log() – writing into the browser console
    6. The various HTML events that can occur
        ◦ User clicks the mouse – onclick, onmousedown, onmouseup
        ◦ Web page has loaded – onload, onunload
        ◦ Image has been loaded
        ◦ Mouse moves over an element – onmouseover, onmouseout
        ◦ Input field is changed – onchange
        ◦ An HTML form is submitted
        ◦ User strokes a key
        ◦ Propagation type (useCapture)
            ▪ Event Bubbling (false, default)– inner most element’s event is handled first and then the outer
            ▪ Event Capturing (true)– outer most element’s event is handled first and then the inner
    7. How to load an image onto a canvas
        ◦ var canvas = document.getElementById("myCanvas");
          var ctx = canvas.getContext("2d");
          const cat_img = new Image();
          cat_img.src = "images/crazycat.gif";
          cat_img.onload = function () {
              ctx.drawImage(cat_img, cat_x, cat_y);
          }
    8. How to draw
          var canvas = document.getElementById("myCanvas");
          var ctx = canvas.getContext("2d");
          ctx.fillStyle = "#FF0000";
          ctx.fillRect(0, 0, 150, 75);
    9. How to handle mouse & keyboard events
        ◦ addEventListener to element or document (all)
    10. How to use JavaScript to alter the CSS for a page
        ◦ document.getElementById(“id”).style.color = “blue”;
    11. The differences and purpose of local and global variables (including how to declare)
        ◦ local – variables declared within a function cannot be used outside the function (var, let, const)
        ◦ global – variables declared outside any function can be accessed from anywhere in the JavaScript program; undeclared variables are global (var, let, const)
    12. Placement of JavaScript scripts and use of onload
        ◦ Javascript code is inserted between <script> and </script> tags
        ◦ scripts can be placed in <body> or <head> section of HTML page or both, but should be placed at the bottom of the html just before the </body> tag so that it is executed after the page is loaded
        ◦ scripts can also be placed in external files (extension .js); external scripts cannot contain <script> tags
        ◦ onload executes a script once a web page has completely loaded all content

In addition, it will be helpful to understand these concepts:
    1. The difference between undefined and null variables
    2. How JavaScript handles Booleans and strict comparisons
    3. The syntax for functions
    4. That variables have dynamic types
    5. How JavaScript handles strings (primitives vs objects)
    6. The usage of dates and arrays (easy to use but important)
    7. The purpose of Strict mode and why it should be used
