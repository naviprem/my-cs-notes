---
layout: post
title:  "JS Google Style Guide"
date:   2020-04-26
categories: JS
---

# JS Google Style Guide

Notes from *Google JavaScript Style Guide* Link [here] (https://google.github.io/styleguide/jsguide.html)

- “Parameter name” comments should be used whenever the value and method name do not sufficiently convey the meaning, and refactoring the method to be clearer is infeasible 

```
someFunction(obviousParam, /* shouldRender= */ true, /* name= */ 'hello');
```

- Declare all local variables with either const or let. Use const by default, unless a variable needs to be reassigned. The var keyword must not be used.
- Every local variable declaration declares only one variable: declarations such as let a = 1, b = 2; are not used.
- Local variables are not habitually declared at the start of their containing block or block-like construct. Instead, local variables are declared close to the point they are first used (within reason), to minimize their scope.
- JSDoc type annotations may be added either on the line above the declaration, or else inline before the variable name if no other JSDoc is present.
```
const /** !Array<number> */ data = [];

/**
 * Some description.
 * @type {!Array<number>}
 */
const data = [];
```

- Do not use array or object constructor. Use Array literal or object literal instead
- Array literals may be used on the left-hand side of an assignment to perform destructuring (such as when unpacking multiple values from a single array or iterable). A final rest element may be included (with no space between the ... and the variable name). Elements should be omitted if they are unused.
- Destructuring may also be used for function parameters (note that a parameter name is required but ignored). Always specify [] as the default value if a destructured array parameter is optional, and provide default values on the left hand side:
```
/** @param {!Array<number>=} param1 */
function optionalDestructuring([a = 4, b = 2] = []) { … };
```

```
- Array literals may include the spread operator (...) to flatten elements out of one or more other iterables.
[...foo]   // preferred over Array.prototype.slice.call(foo)
[...foo, ...bar]   // preferred over foo.concat(bar)
```

- Object literals may represent either structs (with unquoted keys and/or symbols) or dicts (with quoted and/or computed keys). Do not mix these key types in a single object literal.

```
// NOT allowed
{
  width: 42, // struct-style unquoted key
  'maxWidth': 43, // dict-style quoted key
}
```

- This also extends to passing the property name to functions, like hasOwnProperty. In particular, doing so will break in compiled code because the compiler cannot rename/obfuscate the string literal.
```
// NOT allowed
/** @type {{width: number, maxWidth: (number|undefined)}} */
const o = {width: 42};
if (o.hasOwnProperty('maxWidth')) {
  ...
}
```

```
// USE this
/** @type {{width: number, maxWidth: (number|undefined)}} */
const o = {width: 42};
if (o.maxWidth != null) {
  ...
}
```

- Methods can be defined on object literals using the method shorthand ({method() {… }}) in place of a colon immediately followed by a function or arrow function literal.
```
return {
  stuff: 'candy',
  method() {
    return this.stuff;  // Returns 'candy'
  },
};
```

- Note that this in a method shorthand or function refers to the object literal itself whereas this in an arrow function refers to the scope outside the object literal.

```
class {
  getObjectLiteral() {
    this.stuff = 'fruit';
    return {
      stuff: 'candy',
      method: () => this.stuff,  // Returns 'fruit'
    };
  }
}
```