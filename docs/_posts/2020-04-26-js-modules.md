---
layout: post
title:  "Javascript Modules"
date:   2020-05-03
categories: JS
---

# JS Modules

Notes from *Javascript Modules* Link [here] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

## Context

- During its intial days, Javascript was used predominantly to provide intractivity in web pages. They were mostly small scripts running on browsers.
- Over years, browser capabilities improved. Now, complete application with MVC frameworks are built with javascript and running on browsers.
- Also, with NodeJS, javascript is now being used in other contexts, for example to build APIs, to build desktop applications, etc.
- All these has made splitting js programes into smaller modules a necessity
- NodeJS had support for modules. There are a few libraries which enabled module usage on browsers. Like CommonJS and RequireJS
- Modern Browsers have started to support modules natively. 

## .mjs vs .js

- V8 recommends to use .mjs extension for module files to make it clear and ensure runtimes and build tools parse module files correctly.
- However, there is a catch with using .mjs extension with browsers. To get modules to work correctly in a browser, you need to make sure that your server is serving them with a Content-Type header that contains a JavaScript MIME type such as text/javascript.
- If you don't, you'll get a strict MIME type checking error along the lines of "The server responded with a non-JavaScript MIME type" and the browser won't run your JavaScript.
- Most servers already set the correct type for .js files, but not yet for .mjs files. For this reason it is preferable to use .js extension

## To Export

- The easiest way to use it is to place it in front of any items you want exported out of the module, for example:

```
export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}
```

or

```
export { name, draw, reportArea, reportPerimeter };
```

## To import

```
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
```

- Once you've imported the features into your script, you can use them just like they were defined inside the same file. Like so:

```
let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

## In html

- Now we just need to apply the main.js module to our HTML page. This is very similar to how we apply a regular script to a page, with a few notable differences.

- First of all, you need to include type="module" in the script element, to declare this script as a module:

```
<script type="module" src="main.js"></script>
```

## Strict mode

- modules use strict mode automatically
- Modules are only executed once, even if they have been referenced in multiple <script> tags.

## module path

- module path is relative to the site root by default
- if `.` syntax is used to denote the current folder then such paths are relative to the current folder



