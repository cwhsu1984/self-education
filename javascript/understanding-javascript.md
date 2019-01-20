This is a learning note of [JavaScript: Understanding the Weird Parts][0]

[0]: https://www.udemy.com/understand-javascript/

## 2. Execution Contexts and Lexical Environments
### syntax parser, execution context, lexical environment
 - syntax parser
 - execution context
 - lexical environment
    - where it's written and what surrounds it

### name value pairs
 - address = "somewhere"

### Objects
 - a collection of name value pairs

### global environment and global object
 - global execution context
    - **global object(window)** and **this**
    - in browser, **window = this**
 - execution context
    - global object
    - 'this'
    - outer environment
    - your code

### creation and hoisting
 - first phase of execution
 - **hoisting** setup memory space for variables and functions
 - variable not existed is **not defined**
 - variables are initialized as **undefined**
 - let undefined means I've never set this value

### exeuction
 - second phase of execution
 - run code line by line

### single threaded and synchronous execution
 - single threaded: one command at a tme
 - synchronous: one at a time and in order

### function invocation and execution stack
 - invocation
   - running a function
 - execution stack
   - every time a function invoked, a new execution context is created and push into stack

### functions, context and variable environments
 - variable environements
   - where the variable lives
 - every execution context has its own variable environment
   - scope

### the scope chain
 - look for a variable in variable environment of current exeuction context
 - if not found, look at reference to outer environment
 - every execution context has a reference to its outer environment
 - **outer (lexical) environment** mean that where something is written physically
 - the act of searching from scope to scope is scope chain

### scope, ES6 and let
 - scope
   - where a variable is available in your code
 - you're not allowed to use **let** until the line of code is run
 - let is only available inside that block at that period of time for the running code
 - let in for loop is a different variable for each iteration
 - block scoping

### asynchronous callback
 - asynchronous means more than one at a time
 - a browser has rendering engine, js engine, http request
 - inside js engine its **synchronous**
 - but they can cooperate with each other **asynchronously**
 - js engine won't look at event queue until the **execution stack is empty**
 - any events that happen outside of js engine get placed into that **event queue**

## 3. Types and Operators
### types and javascript
 - dyanemic typing

### primitive types
 - a type of data that represents a single value
   - that is, not an object
 - **undefined** represents lack of existence, you shouldn't set a variable to this
 - **null** represents lack of existence, you can set a variable to this
 - **boolean** true or false
 - **number** floating point number, there's always some decimals
 - **string** a sequence of characters
 - **symbol** used in ES6

### operators

### operator precedence and associativity
 - operator precedence
   - which operator funcion gets called first
 - associativity
   - what order operator function get called in
   - left-to-right or right-to-left
 - [operator precendence in javascript][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

### coercion
 - converting a value from one type to another
 - ``var a = 1 + '2';  // 12`` coerce ``var a = '1' + '2'; // 12``

### comparison operators
 - ``console.log(1 < 2 < 3); // true``
   - ``console.log(true < 3);``
   - ``console.log(1 < 3);``
 - ``console.log(3 < 2 < 1); // true``
   - ``console.log(false < 1);``
   - ``console.log(0 < 1);``
   - Number(false) = 0, Number(true) = 1
 - Number(undefined) = NaN
 - Number(null) = 0
 - 3 == 3 => true
 - "3" == 3 => true
 - false == 0 => true
 - var a = false; a == 0; => true
 - false == 0 => true
 - null == 0 => false
 - null < 1 => true
 - "" == 0 => true
 - "" == false => true
 - === compares without coercion, save your life
 - in general, compare the same type
 - in general, use strict equality
 - only use == if you intend to do it
 - [equality comparsion and sameness][2]

[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

### existence and booleans
 - Boolean(undefined) => false
 - Boolean(null) => false
 - Boolean("") => false
 - use coercion to check existence
 ```
 var a;
 // do something and save to a
 if (a) { // if a is 0, this still fails
     console.log('Something is there');
 }
 ```

### default values
  - one line or expression to set default value
```
function greet(name) {
    //console.log(name); // undefined
    name = name || '<Your name here>'; // set defualt value
    console.log('Hello ' + name);
}

greet('Tony'); // Hello tony
greet(); // Hello <Your name here>
greet(0); // Hello <Your name here>
```
 - return first that coerces to true
```
undefined || 'hello' // hello
'hi' || 'hello' // hi
null || 'hello' // hello
0 || 1 // 1
```

### framework aside: default values
 - check global namepsace or global object to avoid colliding or overriding it
```
// load order, lib1.js, lib2.js, app.js
lib1.js
var libname = 'lib1';

lib2.js
//var libname = 'lib2';
// if existed, don't override it
window.libname = window.libname || 'lib2';

app.js
console.log(libname); // lib1
```

## 4. Objects and Functions
### objects and the dot
 - object is a collection of name value pairs
 - contains
   - **primitive 'property'**
   - **object 'property'**
   - **function 'method'**
```
var person = new Object(); // this is not the preferred way

person['firstname'] = 'Tony';
person['lastname'] = 'Alicea';

var firstNameProperty = 'firstname';

console.log(person); // Object [firstname, lastname, __proto__]
console.log(person[firstNameProperty]); // Tony

console.log(person.firstname); // Tony
console.log(person.lastname); // Alicea

person.address = new Object();
person.address.street = '111 Main St.';
person.address.city = 'New York';
person.address.state = 'NY';

console.log(person.address.street); // 111 Main St.
console.log(person.address.city); // New York
console.log(person['address']['city']); // NY
```
 - **dot** is simple and clear

### objects and obejct literals
 - object literal syntax
```
var person = {};
```
 - create an object
```
var Tony = {
    firstname: 'Tony',
    lastname: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
    console.log('Hi ', person.firstname); // object
}

greet(Tony); // Hi Tony

greet({
    firstname: 'Mary',
    lastname: 'Doe'
}); // Hi Mary

Tony.address2 = {
    street: '333 Second St.'
}

```
 - code is translated by js engine
   - creating object and object's properties and methods in memory

### framework aside: faking namespaces
 - namespace
   - a container for variables and functions
   - keep variables and functions with the same name separate
   - contained variables, objects or function in a container object
```
var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet); // Hola!

var english = {
    greetings: {
        basic: 'Hello!'
    }
};
var spanish = {};

//english.greetings.greet = 'Hello!'; // cannot set property 'greet' of undefined
//english.greetings = {};
//english.greetings.greet = 'Hello!';
//english.greet = 'Hello!';

spanish.greet = 'Hola!';

console.log(english);
```

### json and object literals
 - json
   - JavaScript Object Notation
   - json is more strict
   - json and javascript object are different
```
var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral)); // to json string

// xml, lot of wasted bandwidth to send data
// <object>
//     <firstname>Mary</firstname>
//     <isAProgrammer>true</isAProgrammer>
// </object>

// json, isn't really javascript
//{
//    "firstname": "Mary",
//    "isAProgrammer": true
//}
var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }'); // to object

console.log(jsonValue);
```

### functions are objects
 - first class functions
   - everything you can do with other types you can do with functions
   - assign them to variables, pass them around, create them on the fly
 - function is a special type of object
   - can have primitive, object, function
   - **NAME**
     - optional, can be anonymous
   - **CODE**
     - the code you write
     - **invocable**
```
function greet() {
    console.log('hi');
}

greet.language = 'english';

console.log(greet); // object
console.log(greet.language'); // english

greet(); // NAME => greet, CODE => console.log('hi');
```
 - in js, **functions are objects**

### function statements and function expressions
 - expression
   - a unit of code that results in a value
     - it doesn't have to save inside a variable
```
var a;

if (a === 3) { // statement
}
---
// under console
a = 3;
3
1 + 2;
3
a = { gretting: 'hi' };
Object
```
 - **functions in javascript are objects**
```
greet();

// doesn't result a value, just put into memory, just statment
// hoist
function greet() {
    console.log('hi');
}

//anonymousGreet(); // undefined is not a function

// function object, NAME (anonymous), CODE console.log('hi')
var anonymousGreet = function() { // til here variable is assigned to function
    console.log('hi');
}

anonymousGreet(); // with () to invoke

function log(a) {
    console.log(a);
}

log(3); // 3
log("Hello"); // string literal
log({
    greeting: 'hi'
}); // Object
// pass a function to a function
log(function() {
    console.log('hi');
}); // function object

// pass function as variable
function logf(a) {
    a(); // invoke the function
}
logf(function() {
    console.log('hi');
}); // hi
```

### conceptual aside: by value vs by reference
 - it's about variable
 - by value
   - copying value into two separate spots in memory
```
a -> primitive value (0x001)
b = a
b -> copy of primitive value (0x002)
```
```
// by value (primitives)
var a= 3;
var b;

b = a; // create new spot in memory and copy the value
a = 2;

console.log(a); // 2
console.log(b); // 3
```
 - by reference
   - two name points to same object
   - look at the same place in memory
   - all object interact by reference
```
a -> object (0x001)
b = a
b -> object (0x001)
```
```
// by reference (all objects including functions)
var a = {greeting: 'hi' };
var d;

d = c; // pointing to same spot in memory
c.greeting = 'hello'; // mutate

console.log(c); // greeting:hello
console.log(d); // greeting:hello

by reference (even as paramters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c); // greeting: Hola
console.log(d); // greeting: Hola

// equals operator sets up new memory space (new address)
// set up memory for this to live and point c at it
c = { greeting: 'howdy' };
console.log(c); // greeting: howdy
console.log(d); // greeting: Hola
```
 - mutate
   - to change something
   - **immutable** means it **can't be changed**
 - **equals operator** sets up new memory space
 - all primitive types are by value
 - all objects are by reference

### objects, functions and **this**
 - when function invoked a new execution context is created
   - don't confuse this with the object discussed here
 - function objects has
   - properties, methods, name, code
 - think of execution context on the code portion of function object
   - variable environment
   - outer lexical environment
   - **this**
     - pointing at different object, different thing, depending on how function is invoked
     - there are a few scenarios where this will be changed depending on how the function is called
```
console.log(this); // window

function a() {
    console.log(this); // window
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this); // window
}

// 3 executon contexts(ECs), 3 this(window, a, b)
a();

console.log(newvariable); // on the global(window) object

b();

var c = {
    name: 'The c object',
    log: function() { // a method on an object
        // objects set equal to by reference, self points at the same location
        // in memory as this
        // then just use self instead of this even inside sub-functions
        var self = this;

        // we will use let instead of var to clear some of these problems up

        // in this case, function is a method attached to an object, this keyword
        // becomes the object the method is attached to.
        // this points at that very object that contains you
        //this.name = 'Updated c object';
        //console.log(this);
        //
        //var setname = function(newname) {
        //    this.name = newname;  // mutate global object, WEIRD, but that's how javascript works!
        //}
        //setname('Updated again! The c object'); // window.name = 'Update again! The c object';
        //console.log(this);

        // best practice if to use self instead of this
        self.name = 'Updated c object';
        console.log(self);
        var setname = function(newname) {
            self.name = newname; // looks down scope chain and find self pointing at c object
        }
        setname('Updated again! The c object'); // c.name = 'Update again! The c object';
        console.log(self);
    }
}

c.log();
```

### conceptual aside: arrays - collections of anything
  - figure out what types of things are ony the fly
    - **dynamically typed**
    - can mix and match each individual item
```
var arr = [
    1,
    false,
    {
        name: 'Tony',
        'address': '111 Main St.'
    },
    function(name) {
        var greetng = 'Hello ';
        console.log(greeting + name);
    },
    'hello'
]; //new Array();

console.log(arr); // collection of anything
arr[3](arr[2].name); // Hello Tony
```

### arguments and spread
 - won't use arguments as much in the next version of javascript
   - still in current frameworks and librarays
 - new approach is **spread**
 - exeuction context(function)
   - variable environment, 'this', outer environment, **'arugments'**
 - arguments
   - a list of all parameters you pass to a function
```
//function greet(firstname, lastname, language = 'en') { // next version
//function greet(firstname, lastname, language, ...other) { // 'other' is using spread parameter, not available yet
function greet(firstname, lastname, language) {

    language = language || 'en'; // current way for default values

    if (arguments.length === 0) {
        console.log('missing parameters);
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arugments);
    // will be DEPRECATED
    console.log(arguments[0]); // same as firstname
}

greet(); // this is ok, just undefined, undefined, en, [], due to hoisting
greet('John'); // John, undefined, en, ['John']
greet('John', 'Doe'); // John, Doe, en, ['John', 'Doe']
greet('John', 'Doe', 'es'); // 'John', 'Doe', 'es', ['John', 'Doe', 'es']

```
 - arguments are array-like, but **isn't exactly a JS array**
   - doesn't have all the features of a JS array

### framework aside: function overloading
 - JS doesn't have function overloading
 - an alternative way
```
function greet(firstname, lastname, language) {
    language = language || 'en';
    if (language == 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }
    if (language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}
function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}
greetEnglish('John', 'Doe'); //greet('John', 'Doe', 'en');
greetSpanish('John', 'Doe'); //greet('John', 'Doe', 'es');
```

### conceptual aside: syntax parsers
 - code does not run directly
 - code is being translated by intermediate program so that computer can understand it
 - JavaScript engine on browser for example does this
   - going through code character by character, making assumptions, stating certain rules
   - even make changes to your code before it's executed

### dangerous aside: automatic semicolon insertion
 - easy to make mistake
 - hard to debug
 - **always AVOID it**
 - semicolons are optional
   - when seeing a carriage return after the keyword **return**, syntax parser injects it for you
   - cause a problem in your code
```
function getPerson() {
    // this fail because it injects semicolon after return automatically
    return
    {
        firstname: 'Tony'
    }
    // this works because JS sees bracket after return
    return {
        firstname: 'Tony'
    }
}
console.log(getPerson()); // undefined due to semicolon insertion
```

### framework aside: whitespace
 - whitespace
   - invisible characters that create literal **'space'** in your written code
     - carriage returns, tabs, spaces
   - make your code readable
```
// this is just an example, and personally, I will do it the 'clean code' way
var
    // first name of the person
    firstname,

    // last name of the person
    lastname,

    // the language
    // can be 'en' or 'es'
    language;

var person = {
    // the first name
    firstname: 'John',

    // the last name
    // (always required)
    lastname: 'Doe'
}

console.log(person);
```

### immediately invoked functions expressions(IIFEs)
 - IIFE
```
// function statement get put into memory
function greet(name) {
    console.log('Hello ' + name);
}
// invoke it to execute
greet('John'); // Hello John

// function expression not in memory until it is executed to the next line
var greetFunc = function(name) {
    console.log('Hello ' + name);
}
// invoke it using a variable pointing to that memory location
greetFunc('John'); // Hello John

// using an immediately invoked function expression (IIFE)
var greeting = function(name) {
    console.log('Hello ' + name);
}('John'); // invoke it after creating it

// greeting hold the result string instead of the function object
console.log(greeting); // Hello John

3; // valid javascript expression
"I am a string"; // valid
{ // valid
    name: John
};

var firstname = 'John';
// function expression wrapped in parentheses to trick syntax parser
(function(name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
}(firstname)); // Inside IIFE: Hello John
// })(firstname); // also works, just pick one and be consistent
```

### framework aside: IIFES and safe code
 - global execution context
   - greeting: 'Hola'
 - () -> new execution context(for the anonymous function)
   - greeting: 'Hello'
   - code is safe
     - has its own execution context and is not colliding with other code
```
// app.js
// IIFE
(function(global, name) {
    var greeting = 'Hello';
    global.greeting = 'Hello'; // mutate global greeting from Hola to Hello
    console.log(greeting + ' ' + name);
}(window, 'John')); // Hello John

console.log(greeting); // Hola
// greet.js
var greeting = 'Hola';

// index.html
greet.js
app.js
```

### understanding closures
 - global EC
   - sayHi() EC
     - name: 'Tony'
     - console.log(whattosay + ' ' + name); -> sees whattosay: 'Hi'
       - greet() is gone, greet() EC is gone
       - what's in memory for greet() EC isn't
       - JS makes sure that my function can still go down the scope chain and find it
     - the EC has closed in its outer variables
       - it's called **closure**
 - greet() EC
   - whattosay: 'Hi'
     - memory space is still there when greet() EC is gone
 - JS engine will make sure that whatever function I'm running, it will have access to variables that it's supposed to have access to
```
function greet(whattosay) {
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

var sayHi = greet('Hi'); // return a function with whattosay = Hi
sayHi('Tony'); // Hi Tony

//greet('Hi')('Tony'); // Hi Tony
```
