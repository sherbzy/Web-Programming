Module 8: PHP 1 - The Basics
Note: this module was about going over the basics of PHP and did not include a coding project


PHP 1: Basics - Learning Goals
    1. What parts of PHP are case sensitive
        ◦ Variable names are case-sensitive ($name != $Name)
        ◦ Keywords are NOT case-sensitive (if, else, while, echo, etc.)
    2. How PHP handles types
        ◦ Loosely Typed Language – type declaration not necessary
        ◦ PHP supports:
            ▪ String – “car”
            ▪ Integer – 5, -7
            ▪ Float – 22.1, -0.989
            ▪ Boolean – true, false
            ▪ Array – $cars = array(“Volvo”, “BMW”, “Toyota”);
            ▪ Object – class Car { }
            ▪ NULL – NULL, null
            ▪ Resource
    3. The difference between local vs global vs static scope
        ◦ local – a variable declared within a function; can only be accessed within that function
        ◦ global – a variable declared outside a function; can only be accessed outside a function; use global keyword (global $name) or array of global variables ($GLOBALS[‘name’]) to access global variables inside a function
        ◦ static – keyword used upon variable declaration so that the variable is not deleted when the function it was declared in has completed execution
    4. What superglobals are and their corresponding usages
        ◦ superglobals – always accessible, regardless of scope
        ◦ PHP superglobal variables: $GLOBALS, $_SERVER, $_REQUEST, $_POST, $_GET, $_FILES, $_ENV, $_COOKIE, $_SESSION
            ▪ $GLOBALS – stores all global variables in an array
            ▪ $_SERVER – holds information about headers, paths, and script locations
            ▪ $_REQUEST – used to collect data after submitting an HTML form
            ▪ $_POST – used to collect form data after submitting an HTML form with method=”post”
            ▪ $_GET – used to collect form data after submitting an HTML form with method=”get”
    5. The different actions a form can use (e.g., GET vs POST) and how each are received by the server
        ◦ action – attribute that defines the action to be performed when the form is submitted; usually form is sent to a file on the server
        ◦ target – attribute that specifies where to display the response that is received after submitting the form (_blank, _self, _parent, _top, framename)
        ◦ method – attribute that specifies the HTTP method to be used when submitting the form data
            ▪ GET:
                • appends the form data to the URL in name/value pairs (NEVER use to send sensitive data)
                • length of URL is limited (2048 characters
                • useful for form submissions where user wants to bookmark result
            ▪ POST:
                • appends the form data inside the body of the HTTP request
                • has no size limitations (can be used to send large amounts of data)
                • form submissions cannot be bookmarked
    6. The dangers of form entry and how to sanitize input
        ◦ danger: cross-site scripting attack
        ◦ sanitize input using validation: client-side, server-side
    7. What Cross-Site Scripting (XSS) is
        ◦ a type of injection attack in which malicious scripts are injected into otherwise benign and trusted websites
    8. The pros/cons of using PHP vs JS vs HTML5 for form validation
        ◦ client-side validation: uses JS and/or HTML5
            ▪ pros: improved responsiveness of application, reduced server load per active user session
            ▪ cons: can be easily bypassed by malicious users (turning of JS renders it useless)
        ◦ server-side validation: uses PHP
            ▪ pros: should typically be used for all form validation since it cannot be as easily bypassed by malicious users
            ▪ cons: I’m not really sure...maybe it’s an annoying thing to have to implement? Based on my research you should always do server-side validation because a malicious user could drop or modify anything in your database
    9. How to retrieve form data on the server
        ◦ use post or get method
        ◦  <html>
          <body>
          
              <form action="welcome.php" method="post">
              Name: <input type="text" name="name"><br>
              E-mail: <input type="text" name="email"><br>
              <input type="submit">
              </form>
          
          </body>
          </html> 
