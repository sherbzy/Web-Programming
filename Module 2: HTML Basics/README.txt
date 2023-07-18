Module 2: HTML Basics

HTML Learning Goals
    1. Structure of an HTML document 
        ◦ <!doctype html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html> 
    2. Our style guidelines for HTML 
        ◦ declare document type
        ◦ lowercase element and attribute names
        ◦ close all html elements
        ◦ quote attributed values
        ◦ specify alt, width, height for images
        ◦ minimal spaces (ex. href=”stuff”, NOT href = “stuff”)
        ◦ never skip <title> element, <html> tag, <body> tag, <head> tag
        ◦ add the lang attribute
    3. The purpose of the doctype tag and other elements commonly used within the <head> section
        ◦ doctype tag – tells the browser what version of html the document is written in 	
        ◦ <title>, <style>, <meta>, <link>, <base>
    4. How to add whitespace to your output 
        ◦ break tag - <br>
        ◦ preformatted text - <pre>
        ◦ one space - &nbsp or &#160
        ◦ two spaces - &ensp
        ◦ four spaces - &emsp
    5. Use of <strong> vs <b> and <em> vs <i> 
        ◦ <strong> - indicates greater importance
        ◦ <b> - draws attention to specific text
    6. The purpose of h1-h6 and p
        ◦ h1-h6 – 6 layers of section headings
        ◦ p – paragraph, normal text
    7. The difference between block and inline elements 
        ◦ block – always starts on a new line; browser adds a margin to either side; takes up the full width that is available (ex. <p>, <div>)
        ◦ inline – does not start on a new line; cannot contain a block element (ex. <abbr>, <b>, <q>)
    8. The difference between HTML markup and style attributes
        ◦ <h1 style="color:blue;text-align:center">This is a header</h1>
        ◦ <p style="color:green">This is a paragraph.</p>
        ◦ <del>, <ins>, <i>, <b>
