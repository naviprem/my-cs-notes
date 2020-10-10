---
layout: post
title:  "CSS Position"
date:   2020-05-30
categories: CSS
---

## CSS Position

Notes from *MDNe* Link [here](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

- If an element does not have a computed position it is statically positioned. it is positioned based on the display property rules, block, inline, flex or grid
- An element can be positioned relative, absolute, fixed or sticky

### Relative position

- position is relative to its normal position
- `top` and `bottom` specifies vertical offset
- `left` and `right` specifies horizantal offset

```html
<style>
.rel-parent {
    background-color: darkseagreen;
    width:100px;
}
.rel-child {
    background-color: aquamarine;
    position:relative;
    top:10px;
    left:10px;
}
.rel-para {
    background-color: azure;
    position:relative;
    top:10px;
    left:10px;
}
</style>
<div class="rel-parent">h1
    <div class="rel-child">h2
        <p class="rel-para">hello</p>
    </div>
</div>
```
<style>
.rel-parent {
    background-color: darkseagreen;
    width:100px;
}
.rel-child {
    background-color: aquamarine;
    position:relative;
    top:10px;
    left:10px;
}
.rel-para {
    background-color: azure;
    position:relative;
    top:10px;
    left:10px;
}
</style>
<div class="rel-parent">h1
    <div class="rel-child">h2
        <p class="rel-para">hello</p>
    </div>
</div>

### Absolute position

- An absolutely positioned element is an element whose computed position value is absolute or fixed. The top, right, bottom, and left properties specify offsets from the edges of the element's containing block.
- If the element has margins, they are added to the offset. 
- The element establishes a new block formatting context (BFC) for its contents.

### Sticky position

A stickily positioned element is an element whose computed position value is sticky. It's treated as relatively positioned until its containing block crosses a specified threshold (such as setting top to value other than auto) within its flow root (or the container it scrolls within), at which point it is treated as "stuck" until meeting the opposite edge of its containing block.