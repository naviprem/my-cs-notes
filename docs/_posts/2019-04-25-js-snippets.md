---
layout: post
title:  "Javascript - Part 04: Commonly used code snippets"
date:   2019-04-25
categories: JS
---


### Check if array

```js
let arr = [1, 2, 3];

if(Array.isArray(arr)) {
    console.log(true);
} else {
    console.log(false);
}
```

### Check if instance of an object

```js
let e = new RangeError();

if(e instanceof RangeError) {
    console.log(true);
} else {
    console.log(false);
}
```


### Check if number
```js
let n = 1;

if (typeof n === 'number')  {
    console.log(true);
} else {
    console.log(false);
}

if (!isNaN(n))  {
    console.log(true);
} else {
    console.log(false);
}
```