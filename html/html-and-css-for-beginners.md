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
