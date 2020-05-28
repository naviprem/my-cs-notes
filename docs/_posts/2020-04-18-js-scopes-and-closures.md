---
layout: post
title:  "JS Scopes and Closures"
date:   2020-04-18
categories: JS
---

# JS Scopes and Closures

Notes from *You Don't Know JS Yet: Scope & Closures* Link [here] (https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md)

- JS is typically classified as an interpreted scripting language, so it's assumed by most that JS programs are processed in a single, top-down pass. But JS is in fact parsed/compiled in a separate phase before execution begins.

- While the JS specification does not require "compilation" explicitly, it requires behavior that is essentially only practical with a compile-then-execute approach.

- There are three program characteristics you can observe to prove this to yourself: syntax errors, early errors, and hoisting.

```
// Syntax errors

var greeting = "Hello";

console.log(greeting);

greeting = ."Hi";
// SyntaxError: unexpected token .
```

```
// Early errors

console.log("Howdy");

saySomething("Hello","Hi");
// Uncaught SyntaxError: Duplicate parameter name not
// allowed in this context

function saySomething(greeting,greeting) {
    "use strict";
    console.log(greeting);
}
```

```
// Hoisting

function saySomething() {
    var greeting = "Hello";
    {
        greeting = "Howdy";  // error comes from here
        let greeting = "Hi";
        console.log(greeting);
    }
}

saySomething();
// ReferenceError: Cannot access 'greeting' before
// initialization
```
## how the JS engine identifies variables and determines the scopes of a program

- JS's scope is determined at compile time; the term for this kind of scope is "lexical scope". "Lexical" is associated with the "lexing" stage of compilation

- For the JS engine to properly handle a program's variables, it must first label each occurrence of a variable as target or source. We'll dig in now to how each role is determined.

```
var students = [
    { id: 14, name: "Kyle" },
    { id: 73, name: "Suzy" },
    { id: 112, name: "Frank" },
    { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {
    for (let student of students) {
        if (student.id == studentID) {
            return student.name;
        }
    }
}

var nextStudent = getStudentName(73);

console.log(nextStudent);
// Suzy
```

There are 5 targets, rest are sources
1. `students = [ // ..`
2. `nextStudent = getStudentName(73)`
3. `for (let student of students) {`
4. `getStudentName(73)`
5. `function getStudentName(studentID) {`

Runtime scope modifications can happen in non-strict mode in 2 ways
1. `eval`
2. `with`

```
function badIdea() {
    eval("var oops = 'Ugh!';");
    console.log(oops);
}
badIdea();   // Ugh!
```

```
var badIdea = { oops: "Ugh!" };

with (badIdea) {
    console.log(oops);   // Ugh!
}
```

- To narrow this chapter down to a useful conclusion, the key idea of "lexical scope" is that it's controlled entirely by the placement of functions, blocks, and variable declarations, in relation to one another.

- If you place a variable declaration inside a function, the compiler handles this declaration as it's parsing the function, and associates that declaration with the function's scope. If a variable is block-scope declared (let / const), then it's associated with the nearest enclosing { .. } block, rather than its enclosing function (as with var).

- Furthermore, a reference (target or source role) for a variable must be resolved as coming from one of the scopes that are lexically available to it; otherwise the variable is said to be "undeclared" (which usually results in an error!). If the variable is not declared in the current scope, the next outer/enclosing scope will be consulted. This process of stepping out one level of scope nesting continues until either a matching variable declaration can be found, or the global scope is reached and there's nowhere else to go.

- It's important to note that compilation doesn't actually do anything in terms of reserving memory for scopes and variables. None of the program has been executed yet.

- Instead, compilation creates a map of all the lexical scopes that lays out what the program will need while it executes. You can think of this plan as inserted code for use at runtime, which defines all the scopes (aka, "lexical environments") and registers all the identifiers (variables) for each scope.

- In other words, while scopes are identified during compilation, they're not actually created until runtime, each time a scope needs to run.
