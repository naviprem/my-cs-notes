---
layout: post
title:  "Javascript - Part 03: Functions and closures"
date:   2018-05-30
categories: JS
---

### Reference: 

Mozilla's Javascript [Tutorials](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Function declarations

* `function definition:` consists of the function keyword, followed by name, list of parameters and statements that define the function, enclosed in curly brackets, { }
* The return statement specifies the value returned by the function.

```angular2html
function square(number) {
  return number * number;
}
```

* Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.
* If you pass an object as a parameter and the function changes the object's properties, that change is visible outside the function

### Function expressions
* While the function declaration above is syntactically a statement, functions can also be created by a function expression. 
* Such a function can be anonymous; it does not have to have a name.

```angular2html
var square = function(number) { return number * number; };
var x = square(4); // x gets the value 16
```

* However, a name can be provided with a function expression and can be used inside the function to refer to itself, or in a debugger to identify the function in stack traces
```angular2html
var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
console.log(factorial(3))
```

* Function expressions are convenient when passing a function as an argument to another function.
* n addition to defining functions as described here, you can also use the Function constructor to create functions from a string at runtime

```angular2html
var sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));
// expected output: 8
```

* A method is a function that is a property of an object

### Calling functions
* Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code)
* The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level.
```angular2html
console.log(square(5));
/* ... */
function square(n) { return n * n; }
```

### Function scope
* Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. 
* However, a function can access all variables and functions defined inside the scope in which it is defined. 
* In other words, a function defined in the global scope can access all variables defined in the global scope. 
* A function defined inside another function can also access all variables defined in its parent function and any other variable to which the parent function has access.

### Recursion

* A function can refer to and call itself. There are three ways for a function to refer to itself:
  
  * the function's name
  * arguments.callee
  * an in-scope variable that refers to the function

```angular2html
var foo = function bar() {
   // statements go here
};

```
Within the function body, the following are all equivalent:

```
bar()
arguments.callee()
foo()
```

### Nested functions and closures
* You can nest a function within a function. The nested (inner) function is private to its containing (outer) function. It also forms a closure. A closure is an expression (typically a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).
* The inner function can be accessed only from statements in the outer function.
* The inner function forms a closure: the inner function can use the arguments and variables of the outer function
* The outer function cannot use the arguments and variables of the inner function.

```angular2html
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
                        // it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8
```
* Notice how `x` is preserved when `inside` is returned. A closure must preserve the arguments and variables in all scopes it references. 
* Since each call provides potentially different arguments, a new closure is created for each call to `outside`. 
* The memory can be freed only when the returned `inside` is no longer accessible.

### Multiply-nested functions

```angular2html
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)
```

### Name Conflicts

* When two arguments or variables in the scopes of a closure have the same name, there is a name conflict. 
* More inner scopes take precedence, so the inner-most scope takes the highest precedence, while the outer-most scope takes the lowest. 
* This is the scope chain. The first on the chain is the inner-most scope, and the last is the outer-most scope. 

### Closures

* Closures are one of the most powerful features of JavaScript. JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).
* However, the outer function does not have access to the variables and functions defined inside the inner function. 
* This provides a sort of encapsulation for the variables of the inner function. 
* Also, since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the duration of the inner function execution, if the inner function manages to survive beyond the life of the outer function. 
* A closure is created when the inner function is somehow made available to any scope outside the outer function.
* An object containing methods for manipulating the inner variables of the outer function can be returned.

```angular2html
var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer 
                             //function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
}
myPet = pet('Vivie');
   
myPet();                     // Returns "Vivie"
```






