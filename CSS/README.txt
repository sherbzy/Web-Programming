CSS Module

CSS Learning Goals
    1. CSS syntax: selectors and declarations
        ◦ selectors
            ▪ #id
            ▪ .class
            ▪ element.class
            ▪ * (all elements)
            ▪ element
            ▪ element, element, ...css
        ◦ declarations: key-value pair
    2. Class Selector vs. ID Selector (both usage and syntax)
        ◦ ID (#) – used to identify a single element in html
        ◦ Class (.) – can be used to identify multiple elements in html
    3. Font Family vs. Generic Family (including why generic is important) and Serif vs. Sans-Serif fonts
        ◦ Font Family vs. Generic Family
            ▪ Font Family – specific font
            ▪ Generic Family – group of fonts that look similar
        ◦ Serif vs. Sans-Serif
            ▪ Serif – contain decorative lines or tapers (tails/feet)
            ▪ Sans-Serif – do not contain decoration; contain simple, clean lines that are the same width throughout
    4. rem vs. em vs. pixel for font size (and which is recommended)
        ◦ rem – based on root html element size; use for sizes and spacint
        ◦ em – based on parent size; use for media queries
        ◦ pixel – not reliable for website development because different screens have differing numbers of pixels
    5. The purpose of the font-size: 100%; for body style
        ◦ This ensures that the CSS applies an initial, uniform font-size value to the whole document that is equal to the font-size set by the user in the browser.
    6. Styling options for block vs. inline elements
    7. display:none vs. visibility:hidden
        ◦ display:none – the tag in question will not appear on the page at all
        ◦ visibility:hidden – the tag is not visible, but space is allocated for it on the page
    8. How elements are positioned using “normal” (static) flow
        ◦ Static positioned elements are not affected by the top, bottom, left, and right properties. It is positioned between the elements above and below it without overlap.
    9. Static, Relative, Fixed, Sticky, and Absolute positioning
        ◦ Static – normal positioning
        ◦ Relative – positioned relative to its normal positioned
        ◦ Fixed – positioned relative to the viewport; stays in the same place even if the page is scrolled
        ◦ Sticky – positioned based on the user’s scroll position
        ◦ Absolute – positioned relative to the nearest positioned ancestor
    10. What causes elements to overlap
        ◦ changing the positioning of elements causes overlap
    11. The CSS box model and how the total size of an element is computed
        ◦ margin
            ▪ border
                • padding
                    ◦ content
    12. The difference between margin and padding
        ◦ margin – space outside the border
        ◦ padding – space between the text and the border
CSS: Basics
    1. 3 ways to add CSS styles to HTML elements
        ◦ Inline – use style attributes inside HTML elements
        ◦ Internal – use a <style> element inside the <head> section
            ▪ <style>
		body {background-color: powderblue;}
		h1 {color:blue;}
		p {color:red;}
		</style>
        ◦ External – use a <link> element to link to an external CSS file
            ▪ <head>
                  <link rel=”stylesheet” href=”styles.css”>
              </head>
    2. Why external stylesheets are used most often
        ◦ Since everything is stored in a single file, changes or updates are reflected over all pages that reference the stylesheet.
    3. Why stylesheets are called “cascading: style sheets
        ◦ Any style applied to the parent will also apply to any children
