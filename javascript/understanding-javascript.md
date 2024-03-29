This is a learning note of [JavaScript: Understanding the Weird Parts][0]

**I personally highly recommend this course**

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

by reference (even as parameters)
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

### understanding closures - Part2
 - global EC
   - buildFunctions(), fs
     - buildFunctions() EC
       - i: 3, arr[f0, f1, f2]
       - this EC ends
   - fs[0]() EC
     - has variable i inside it, so it goes up the scope chain
     - it goes to outer reference(where it was created)
       - inside buildFunctions(buildFunctions EC gone but i and arr still hang around)
     - this EC ends
   - fs[1]() EC and fs[2]() EC
     - same as fs[0]
 - a free variable is a variable that is ouside a function, but that you have access to

```
function buildFunctions() {
    var arr = [];

    // i increase from 0 to 2 and push 3 function objects to arr
    // after i becomes 3, the loop is terminated
    for (var i = 0; i < 3; i++) {

        arr.push(
            // creating function object, putting this line of code into it's code property
            // just creating function object, have invoked yet and thus not running
            function() {
                console.log(i);  // at the point of execution, i is 3
            }
        )

    }

    // what are values of i and arr on return?
    // i = 3 and arr has 3 function objects
    return arr;
}

var fs = buildFunctions();

fs[0](); // 3
fs[1](); // 3
fs[2](); // 3



function buildFunctions2() {
    var arr = [];

    for (var i = 0, i < 3; i++) {
        // let variable is scoped to the block
        // every time the for loop runs, this will be a new variable in memory
        //let j = i;
        //arr.push(
        //    function() {
        //        console.log(j);
        //    }
        //);

        arr.push(
            // IIFE, in each iteration, it's going to execute this function
            // i = 0 to  2
            // push the result of executing this function
            (function(j) {
                // executing this function gives us back a function
                return function() {
                    // when this gets executed, it looks for j
                    // j store the value at the moment it was executed in the loop
                    console.log(j);
                }
            }(i))
        );
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0](); // 0
fs2[1](); // 1
fs2[2](); // 2
```

### framework aside: function factories
 - global EC
   - greetEnglish, greetSpanish, makeGreeting
 - makeGreeting('en') EC
   - language 'en'
 - makeGreeting('es') EC
   - language 'es'
 - greetEnglish() EC
   - outer reference points to language 'en' from makeGreeting('en') where it sits lexically
   - form its closure with language 'en'
 - greetSpanish() EC
   - outer reference points to language 'es' from makeGreeting('es') where it sits lexically
   - form its closure with language 'es'
 - *every time you call a function, you get a new execution context*
   - doesn't matter how many times you call it
   - *any functions created inside of it will point to that execution context*
```
function makeGreeting(language) {
    return function (firstname, lastname) {
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
    }
}

// each makeGreeting has its own EC with different language
var greetEnglish = makeGreeting('en'); // function object whose closure points to en
var greetSpanish = makeGreeting('es'); // function object whose closure points to es

greetEnglish('John', 'Doe'); // Hello John Doe
greetSpanish('John', 'Doe'); // Hola John Doe
```

### closures and callbacks
 - callback function
   - a function you give to another function, to be run when the other function is finished
   - so the function you call(i.e. invoke), 'calls back' by calling the function you gave it when it finishes
     - I call function A, and give it function B
     - when function A finishes running, it calls function B for me

```
function sayHiLater() {

    var greeting = 'Hi!';

    setTimeout(function() { // function object as a callback

        console.log(greeting);

    }, 3000);

}

sayHiLater();

// jQuery uses function expressions and first-class functions!
//$("button").click(function() {
//
//});

function tellMeWhenDone(callback) {
    var a = 1000; // some work
    var b = 2000; // some work

    callback(); // the 'callback', it runs the function I give it!
}

tellMeWhenDone(function() {
    console.log('I am done!');
});

tellMeWhenDone(function() {
    //alert('I am done!');
    console.log('All done...');
});
```

### call(), apply() and bind()
 - function execution context
   - Variable Environment, 'this', Outer Environment
 - call, apply, bind are used to control what the 'this' variable ends up being
 - function is a special type of object
   - CODE
     - "invocable" ()
   - NAME
     - optional, can be anonymous
   - call()
     - **execute function**, decide what 'this' should be and the reset is just what normally pass to the function
   - apply()
     - same as call except that it takes **an array of parameters**
   - bind()
     - **create a copy** of the function whose 'this' is whatever pass by bind

```
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {

        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;

    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName()); // 'this' points to global object
    console.log('Arguments: ' + lang1 + ' ' + lang2);
}
//}.bind(person); // create on the fly bound with the this variable "person"

// pass whatever object I want to be the 'this' variable when the function runs
var logPersonName = logName.bind(person); // Logged: John Doe

logPersonName('en'); // Logged: John Doe, lang1: en, lang2: undefined

logName.call(person, 'en', 'es'); // Logged: John Doe, lang1: en, lang2: es

logName.apply(person, ['en', 'es']); // Logged: John Doe, lang1: en, lang2: es

//logName();

// function expression
(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
}).apply(person, ['en', 'es']); // Logged: John Doe, lang1 en, lang2: es

// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2)); // Jane Doe

// function currying
function multiply(a, b) {
    return a*b;
}

var multiplyByTwo = multiply.bind(this, 2); // set a = 2
// equals to above line
//function multiplyByTwo(b) {
//    return 2*b;
//}

console.log(multiplyByTwo(4)); // 8, since b = 4

var multiplyByThree = multiply.bind(this, 3); // set a = 3

console.log(multiplyByThree(4)); // 12
```
 - function currying
   - creating a copy of a function but with some preset parameters
   - very userful in mathematical situations

### functional programming
 - approach that you can't do in other programming languages that don't have first class functions
 - try your best NOT mutate data in functional programming
   - or change it as high up in that chain as possible
```
function mapForEach(arr, fn) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    };

    retrn newArr;
}

var arr1 = [1,2,3];
console.log(arr1);

//var arr2 = [];
//for (var i = 0; i < arr1.length; i++) {
//    arr2.push(arr1[i] * 2);
//}

var arr2 = mapForEach(arr1, function (item) {
    return item * 2;
});
console.log(arr2); // [2,4,6]

var arr3 = mapForEach(arr1, function (item) {
    return item > 2;
});
console.log(arr3); // [false, false, true]

var checkPastLimit = function (limiter, item) {
    return item > limiter;
}
// create a copy of checkPastLimit on the fly with limiter = 1
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4); // [false, true, true]

var checkPastLimitSimplified = function (limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5); // [false, true, true]
```

### functional programming - Part2
 - underscore.js
   - develop version has lots of comments to read
   - a lot of function programming concetps
   - clean and popular
   - first
   - *you can learn a lot from read it*
 - lodash
   - came along later
```
index.html
underscore.js
app.js

// app.js
// '_' is the global object of underscore library
var arr6 = _.map(arr1, function(item) { return item * 3 });
console.log(arr6);

var arr7 = _.filter([2,3,4,5,6,7], function(item) { return item % 2 === 0; });
console.log(arr7);
```

## 5. object-oriented javascript and prototypal inheritance
### conceptual aside: classical vs prototypal inheritance
 - classical vs prototypal inheritance
 - inheritance
   - one object gets access to the properties and methos of another object
   - you have an object and another object
     - object can access the properties and methos on that other object
 - classical inheritance
   - verbose
     - friend, protected, private, interface
 - prototypal inheritance
   - simple
     - flexible
     - extensible
     - easy to understand

### understanding the prototype
 - object has prototype
 - each prototype can have its own prototype
 - if property cannot be find on object itself
   - it then looks for its prototype
     - this can go all the way up to all prototype
     - **prototype chain**
```
// NOT code, just showing object hierarchy
// obj.prop1
// obj.prop2
// obj.prop3
obj
 - prop1
 - proto
  - prop2
  - proto
   - prop3

// prop2 isn't on obj and obj2
// it's just that when JS engine goes down the chain to search, they happen
// to be pointing at the same place
obj2
 - proto (can point to the same object as obj.proto)
```
```
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname; // does not refer to person, it refers to john in this case
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// DON'T DO THIS EVER! for demo purposes only!!!
john.__proto__ = person;
console.log(john.getFullName()); // John Doe
// it first tries to find firstname on john
console.log(john.firstname); // John

var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;
// it tries to find lastname on jane but cannot find it, then it tries to find lastname on person
console.log(jane.getFullName()); // Jane Default
```

### everything is an object
 - everything is an object (or a primitive)
```
// check a.__proto__
var a = {}; // base object
// check b.__proto__ and b.__proto__.__proto__
var b = function() { }; // empty function object
// check c.__proto__ and c.__proto__.__proto__
var c = []; // []
```

### reflection and extend
 - reflection
   - an object can look at itself, listing and changing its properties and methods
```
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname; // does not refer to person, it refers to john in this case
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// DON'T DO THIS EVER! for demo purposes only!!!
john.__proto__ = person;

// loop over every member in object
for (var prop in john) {
    if (john.hasOwnProperty('prop')) { // check if its really on john object, not its prototype
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

// use underscore here
_.extend(john, jane, jim);

// to understand this, read underscore source code
console.log(john); // john gets functions from jane and jim object
```
 - in the next version of JavaScript, there also will be something called **extends**
   - to be used to se the prototype

## 6. build objects
### function constructors, 'new', and the history of javascript
 - JavaScript was built by a guy named Brendon Eich
 - call it JavaScript to attract Java developers
 - JavaScript sounds like Java and looks a little like Java, but is **NOTHING like Java**
   - doesn't really have classes although there is a class keyword in the next version
     - still isn't really a class the way it is in Java or C# or C++
 - function constructors are just functions
```
function Person(firstname, lastname) {
    console.log(this); // 'this' points to an empty object of Person
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked');

    // having the next line would return greeting object instead
    // return { greeting: 'i got in the way' };
}

// new is an operator creates an empty object and then call this function
var john  = new Person('John', 'Doe');
console.log(john); // Person object firstname: John, lastname: Doe

var jane = new Person('Jane', 'Doe');
console.log(jane); // Person object firstname: Jane, lastname: Doe
```
 - function constructors
   - the **new** operator makes the **new object**
   - a normal function that is used to construct objects
   - the **'this'** variable points a new empty object, and that object is returned from the function automatically

### function constructors and '.prototype'
 - function (a special type of object)
   - CODE
     - "invocable" ()
   - NAME
     - optional, can be anonymous
   - **prototype**
     - used **only** by the new operator
 - functions in JavaScript are objects
   - they take up memory space
 - put method in Person
   - if I have 1000 person objects, I'll have 1000 getFullName methods
 - add method to prototype
   - I'll only have one
   - from a efficiency standpoint, it's better to put methods on the prototype
     - only need one copy to be used
 - need properties for each object cuz it's going to have different values per object
 - but for methods, I only need one
```
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    // this.getFullName = function () {} // this exsits in every object which is bad
    console.log('This function is invoked');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

// john.__proto__
var john  = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
}
console.log(john.getFormalFullName()); // Doe John
```

### dangerous aside: 'new' and functions
 - any function that we intend to be a function constructor
   - always use a **capital letter** for its name
   - *just a convention*
   - *use a Linter to help you*
   - JavaScript engine itself doesn't care whether you do or you don't have the new operator
 - there are new ways coming in JavaScript to create objects
   - function constructors are likly going away, but not so soon
```
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked');
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}

// var john = new Person('John', 'Doe');
// if missing 'new' and execut it.
// Since function not returning anything, you get undefined
var john = Person('John', 'Doe');
console.log(john);

// var jane = new Person('Jane', 'Doe');
var jane = Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ' ' + this.firstname;
}

// get undefined error here, too
console.log(john.getFormalFullName()); // Doe John
```

### conceptual aside: built-in function constructors
```
// try in console

// 'new' function constrcutors creates an object
var a = new Number(3);

// Number {[[PrimitiveValue]]: 3}
a
// check Number.prototype.

var a = new String("John");
// check String.prototype.

a.indexOf("o");
// String objects contains primitive
a

"John".length // the same as 'new String("John")'

var a = new Date("3/1/2015");
// a Date object
a
// check a.
// check Date.prototype.
```
 - edit the prototype property of built in function constructor
   - powerful way to enhance JavaScript
   - **you dont't wanna overwrite an existing or preexisting property or method**
```
String.prototype.isLengthGreaterThen = function(limit) {
    return this.length > limit;
}

console.log("John".isLengthGreaterThen(3)); // true

Number.prototype.isPositive = function() {
    return this > 0;
}

// try this block in console
3.isPositive(); // won't convert a number to an object automatically
var a = new Number(3); // it's not a number, but an object
a.isPositive(); // true
```

### dangerous aside: built-in function constructors
 - in general, don't use the built-in function constructors
   - in case you absolutely have to use them, understand what you're doing to yourself
 - use literals
 - use the actual primitive vales
 - use **Moment.js** instead of Date
   - looks like carbon in php to me
```
// try on console
var a = 3
var b = new Number(3); // return object with primitive value 3

a == b // true because this coerces types
a === b // false, a is primitive, b is an object
var c = Number("3"); // return 3
c // 3
```

### dangerous aside: arrays and for..in
 - in the case of arrays, don't use for..in
 - use **standard for loop** instead
```
Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
    // 0, 1, 2 is property name
    // after add myCustomFeature, you get additional property name myCustomFeature
    // that's not what you want
    console.log(prop + ': ' + arr[prop]);
}

// this is safer
for (var i = 0; i < arr.length; i++) {

}
```

### object.create and pure prototypal inheritance
 - to create an object
   - function constructors
   - Object.create
     - create a new object that becomes the basis for all others
     - override hide properties and methods on those created objects
       - set values of those properties and methods on new objects themselves
```
// polyfill
if (!Object.create) {
    Object.create = function (o) {
        if (arguments.length > 1 ) {
            throw new Error('Object.create implementation'
            + ' only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}

var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname; // use 'this' so it finds the current object
    }
}

var john = Object.create(person);
// console.log(john'); // empty object, __proto__ is Person object
// john.greet(); // Hi Default

// pure prototypal inheritance
john.firstname = 'John';
john.lastname 'Doe';
console.log(john); // object with firstname and lastname
john.greet(); // Hi John

```
 - polyfill
   - **code that adds a feature which the engine MAY lack**
   - fill in the gap for those doesn't support Object.create

### es6 and classes
 - JavaScript doesn't have classes
 - it will in the next version, but in a different way
 - JavaScript class
   - define an object
   - has a constructor acts somewhat like the constructor function
   - is an **object**
   - *you're creating new objects from that object*
   - **prototypal inheritance**
   - *this is not like what you see in C# or Java or C++*
   - use **extends** to set prototype for any of my objects created with this class
     - set **__proto__**
     - **super** call the constructor of the object that is my prototype
     - can override or hide
 - syntactic sugar
   - a different way to type something that doesn't change how it works under the hood
```
// this is an object
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return 'Hi ' + firstname;
    }
}

class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }

    greet() {
        return 'Yo ' + firstname;
    }
}

var john = new Person('John', 'Doe');
```

## 7. odds and ends
### initialization
 - don't be intimidated
 - clean and useful way to initialize data
 - nice for prototyping
```
var people = [
    {
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '111 Main St.',
            '222 Third St.'
        ]
    },
    {
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '333 Main St.',
            '444 Fifth St.'
        ],
        greet: function() {
            return 'Hello!';
        }
    }
]
```

### 'typeof', 'instanceof', and figuring out what something is
 - typeof
   - what type of thing is this
   - typeof(null) is **object**, it's a bug FOREVER
 - instanceof
   - if anywhere down that whole prototype chain of going proto, to proto, to proto, I find this type of object
```
var a = 3;
console.log(typeof a); // 'n'umber, primitive!

var b = 'Hello';
console.log(typeof b); // string

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d); // array is object, weird!
// console.log(d.toString()); // empty string
// .call, invoke this function but tell it what this variable should point to
console.log(Object.prototype.toString.call(d)); // [object Array] better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); // object
console.log(e instanceof Person); // true

console.log(typeof undefined); // undefined, make sense
console.log(typeof null); // object, a bug since, like, FOREVER...

var z = functin() { };
console.log(typeof z); // function (object)
```

### strict mode
 - tell JavaScript engine that you would like it process your code in a stricter way
 - use strict
   - MUST define a variable in order to use it
   - either at top of your file, or at top of a function
   - if you have serveral JavaScript files, and you concatenate and minify them in on file
     - if that first file has use strict at the top
     - the whole thing will be processed using that strict JavaScript engine flag
     - might cause trouble if other JavaScript files don't follow the strict rules
 - [Strict Mode][3]

[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
```
function logNewPerson() {
    // NOT all JS implemented this
    'use strict';

    var person2;
    persom2 = {};
    console.log(persom2);
}

// MUST at top of file
//'use strict';

var person;
// Uncaught ReferenceError: persom is not defined
persom = {};
console.log(persom); // object
// window.persom is object
// window.person is undefined
logNewPerson(); // Uncaught ReferenceError: persom2 is not defined
```

## 8. examining famous frameworks and libraries
### learning from other's good code
 - an open source education
   - you should do
   - learn from AngularJS, jQuery and others
   - github
     - explore Front-end JavasSript Frameworks
 - a good way to learn advanced patterns and concepts in JavaScript

### deep dive into source code
 - jQuery
   - a JavaScript library
   - deals with cross browser issues
   - let you manipulate the DOM
 - see course videos for details
```
// index.html
<html>
    <head>
    </head>
    <body>
        <div id="main" class="container">
            <h1>People</h1>
            <ul class="people">
                <li>John Doe</li>
                <li>Jane Doe</li>
                <li>Jim Doe</li>
            </ul>
        </div>
        <script src="jquery-1.11.2.js"></script>
        <script src="app.js"></script>
    </body>
</html>

// app.js
var q = $("ul.people li");
console.log(q);
```

### deep dive into source code: jQuery - Part2
 - sizzlejs
   - Sizzle CSS Selector
 - jQuery.find = sizzle
 - jQuery.makeArray
 - init.prototype
 - jQuery.fn
 - jQuery.prototype
 - jQuery.fn.init

### deep dive into source code: jQuery - Part3
 - method chaining
   - calling one method after another, and each method affects the parent object
   - so obj.method1().method2() where both methods end up with a 'this' variable pointing at 'obj'
   - this is also related to **fluent interface**
 - addClass
   - **return this**
 - removeClass
   - **return this**
 - $
   - jQuery
```
var q = $("ul.people").addClass("newclass").removeClass("people");
console.log(q);
```

## 9. let's build a framework/library
### requirements
 - greetr
   - when given a first name, last name, and optional language, it generates formal and informal greetings
   - support English and Spanish languages
   - reusable library/framework
   - easy to type 'G$()' structure
   - support jQuery

### structuring safe code
```
// Greetr.js
(function(global, $) {

}(window, jQuery));
```

### our object and its prototype
```
// app.js
var g = G$('John', 'Doe'); // firstname: John, lastname: Doe, language: en

// Greetr.js
(function(global, $) {

    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    Greetr.prototype = {};

    Greetr.init = function (firstname, lastname, language) {
        var self = this;
        self.firstname = self.firstname || '';
        self.lastname = self.lastname || '';
        self.language = self.language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
```

### properties and chainable methods
```
// app.js
var g = G$('John', 'Doe'); // firstname: John, lastname: Doe, language: en
g.greet().setLang('es').greet(true);

// Greetr.js
(function(global, $) {

    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greetr.prototype = {

        fullName: functon() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // make the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        }
    };

    Greetr.init = function (firstname, lastname, language) {
        var self = this;
        self.firstname = self.firstname || '';
        self.lastname = self.lastname || '';
        self.language = self.language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
```

### adding jQuery support
```
// app.js
var g = G$('John', 'Doe'); // firstname: John, lastname: Doe, language: en
g.greet().setLang('es').greet(true).log();

// Greetr.js
(function(global, $) {

    var Greetr = function(firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    }

    var supportedLangs = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion'
    };

    Greetr.prototype = {

        fullName: functon() {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstname + '!';
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();
        },

        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to 'false'
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // make the method chainable
            return this;
        },

        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function(lang) {
            this.language = lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    Greetr.init = function (firstname, lastname, language) {
        var self = this;
        self.firstname = self.firstname || '';
        self.lastname = self.lastname || '';
        self.language = self.language || 'en';
    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
```

### good commenting
 - see course content

### let's use our framework!
```
// app.js
var g = G$('John', 'Doe'); // firstname: John, lastname: Doe, language: en
g.greet().setLang('es').greet(true).log();

$('#login').click(function() {

    var loginGrtr = G$('John', 'Doe');

    $('#logindiv').hide();

    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();

});
// Greetr.js
// ';' in case there's some other code injected before ours
// that doesn't quite finish out its semicolons properly
;(function(global, $) {

}(window, jQuery));
```

### a side note
 - I personally highly recommend this course

## 10. bonus lectures
### typescript, es6, and transpiled languages
 - convert the syntax of one programming language, to another
   - in this case languages that don't really ever run anywhere, but instead are processed by 'transpilers' that generate JavaScript
   - [TypeScript][4]
     - provide type for variables
     - also other features in es6
   - [traceur-compiler][5]
     - provide es6
 - *don't use transpilers without understanding what it does to the code*

[4]: http://www.typescriptlang.org/
[5]: https://github.com/google/traceur-compiler

## 11. bonus: getting ready for ECMAScript 6
### existing and upcoming features
 - [es6 features reference][6]

[6]: https://github.com/lukehoban/es6features

## 12. conclusion
### learning to love the weird parts
 - [author][7]

[7]: https://twitter.com/anthonypalicea
