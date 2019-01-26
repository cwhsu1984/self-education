This is a learning note of [html and css for beginners][0]

[0]: https://www.udemy.com/html-and-css-for-beginners-crash-course-learn-fast-easy/

# 1. first step and introduction
## some tips to get you started
 - make goals
 - do something daily
 - think about the results
   - get motivated
 - believe in youself
 - make every minute count
   - what am I going to accomplish
   - am I watching too much TV or am I doing something I'm not supposed to
     - that is worthless
   - make sure that your life counts for something
 - completed finish it
 - finish every course you take
 - **DONT procrastinate**

## what's HTML?
 - stands for HyperText Markup Language
   - markup language
   - it's used to create web pages
 - How does it look like?
```
<p> this is called a p tag or paragraph tag </p>
<h1> page heading </h1>
<hr>
```
```
<p>
<h1>
<i>
<bold>
<strong>
<header>
<nav>
<br>
<div>
<form>
<audio>
<footer>
<embed>
```
 - How does it work?
   - save with .html extension
     - index.html
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Web Page</title>
    </head>
    <!-- anything between body tag are going to be visible in the browser -->
    <body>
        <p>Hi, I am a paragraph, who are you?</p>
    </body>
</html>
```
 - what about css;
  - stands for **cascading style sheets**
  - it's used to control how a web page looks(styles)
 - how does css look like?
```
p {
  color:red; /* change color of p tag */
  font-weight:bold;
  }
```
```
/* common css property */
border
color
margin
text-align
visibility
position
overflow
display
width
float
font-family
top
transform
```
 - how does it works?
   - save with .css extension
   - style.css
   - style sheet

## course exercise and video quality
 - change video quality
 - download exercise file
 - wrtie review
 - for negative review, please contact the instructor and give him a chance to fix it

## code editor
 - turn on your file extension

# 2. page structure
## first html code
 - use **inspect** to check the style
```
<p>This is a sentence.</p>
<h1>This is a sentence.</h1>
```

## exploring the document
 - DOCTYPE
   - document type
   - html5 document
 - lang is attribute
   - tell that language is English
 - encoding is UTF-8

## headings
 - h1,h2,h3,h4,h5,h6

## comments, whitespace and line breaks
 - whitespace is ignores in html
 - line break
 - comment
```
<br> <!-- line break -->
<!-- comments -->
```

## popular html tags
 - [lorem ipsum][1]
   - generate dummy text
 - strong
   - bolder darker
 - i
   - italic
 - blockquote
   - put text apart from everything else in a quote format
 - hr
   - horizontal rule
 - div
   - like a container

[1]: https://www.lipsum.com/

## creating images
 - img
   - width
     - pixels
     - without height, it keeps proportion
```
<img width="100" height="100" src="images/cat.jpg">
```

## ceating lnks
 - a
   - link
   - target
     - _blank
       - new tab
```
<a href="images.html" target="_blank">click me</a>
```

## clickable images
 - wrap image with a tag
```
<a href="images.html" target="_blank">
    <h1>click me</h1>
    <img width="100" src="images/cat.jpg">
</a>

```

## tables
 - table
   - tr
     - table row
     - td
       - table data
   - th
     - table heading
   - thead
   - tbody
```
<table>
    <thead>
        <tr>
            <th>name</th>
            <th>lastname</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>peter</td>
            <td>williams</td>
        </tr>
        <tr>
            <td>john</td>
            <td>Doe</td>
        </tr>
        <tr>
            <td>maria</td>
            <td>Gonzalez</td>
        </tr>
    </tbody>
</table>
```

## forms
 - form
   - input
     - type
       - text, email, password, file, submit
   - action
     - send data to another file
   - method
     - usually POST
```
<form action="process.php" action="POST">
    <label for="name">Name
        <input type="text" placeholder="enter name">
    </label>
    <p> Email
        <input name="email" type="email">
    </p>
    <p> Password
        <input name="password" type="password">
    </p>
    <p>
        <input name="image" type="file">
    </p>
    <p>
        <input name="submit" type="submit">
    </p>
</form>
```

## lists
 - ul
   - unordered list
   - li
     - list

 - ol
   - ordered list
```
<body>
    <ul>
        <h2>categories</h2>
        <li><a href="document.html">list item</a></li>
        <li><img width="100" src="images/cat.jpg" alt=""></li>
        <li>list item</li>
    </ul>
    <ol>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ol>
</body>
```

## the rest of the html tags
 - [html tags][2]
 - [mozilla html][3]
   - one of the best document

[2]: https://www.w3schools.com/tags/
[3]: https://developer.mozilla.org/zh-TW/docs/Web/HTML

# 3. css
## inline style
 - inline, internal, external
 - [color picker][4]

[4]: https://www.w3schools.com/colors/colors_picker.asp
```
<body>
    <!-- attribute:value -->
    <p style="color:red">this is another paragraph.</p>
    <p style="color:#333;font-size:24px;font-weight:bold">this is a paragraph.</p>
</body>
```

## internal
 - using css inside document
 - put style in head section
```
    <head>
<style>
p {
    color:red;
    font-weight:bold;
    font-size:24px;
}
</style>
    </head>
    <body>
        <p>hello dear student, how are you?</p>
    </body>
</html>
```

## external
 - use css from other file
```
<head>
<link rel="stylesheet" href="css/style.css">
</head>
```

## selectors
 - select different elements from document
 - id
 - class

## id's and classes
 - ids are stronger than tags
 - class
   - when you have a lot of different elements that have the same style
 - id
   - for only one specific item
   - when you want to specifically assign a unique name to a html element
```
<!-- id -->
#first-para {
    color:yellow;
}

<!-- class -->
.first-para {
    color:purple;
}
```

## linking javascript
```
<head>
    <script src="js/script.js"></script>
</head>
```

## comming styling properties
 - [css properties reference][5]
 - cascading style sheets
   - last style overrides previous style

[5]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

# 4. extra bonus lectures - more css exmaples
## inserting pictures and styling
 - debug tool > Elements > Styles > element.style
   - play with it
 - inspect element
```
/* target id image */
#image {
    width: 100%;
}

/* whatever image you find that its id is image */
img#image {
    border: 2px solid red;
    border-radius: 5px;
}
```

## inserting pictures via css
```
#picture-css {
    width:100px;
    height:100px;
    background-image: url(../images/cat.jpg);
    margin:auto;
}
```

## hover effect
 - css selector
 - :hover
   - selects links on mouse over
```
#hovers {
    width:200px;
    height:200px;
    border: 1px solid black;
    background-image: url(../images/cat.jpg);
    background-size:100%;
    background-repeat:no-repeat;
    opacity:0.5;
}

#hovers h2 {
    text-align:center;
}

#hovers:hover {
    /* background-color:#000; */
    border:1px solid red;
    color:white;
    opacity:1;
}
```

## where to go next
 - [Edwin Diaz][6]
 - JavaScript
 - PHP

[6]: https://www.udemy.com/user/edwin166/

## get your certificate here

# 5. extra bonus section - let's build a website!
## intro
 - do a little php

## structure

## menu
 - &nbsp;
   - non-breaking space
   - the line should not be wrapped at that point
   - non-collapsing
```
// http://jsfiddle.net/RP3SC/
<div style="width:45px; height:45px; border: solid thin red; overflow: visible">
    Hello&nbsp;There
</div>

<br />

<div style="width:45px; height:45px; border: solid thin red; overflow: visible">
    Hello There
</div>
```

## main divs
 - [placeholder.com][7]

[7]: https://placeholder.com

## footer and more

## styling container, body and header

## styling menu

## styling main div

## sytling footer part 1

## styling footer part 2

## about page

# 6. messaing form / contact form with some PHP
## form html markup

## styling form part 1

## styling form part 2

## styling form part 3
