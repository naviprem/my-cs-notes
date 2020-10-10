---
layout: post
title:  "CSS Display"
date:   2020-05-30
categories: CSS
---

## CSS Display

Notes from *MDNe* Link [here](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

The display property defines how a box and any boxes inside it behave.

The display type of an element defines the outer display type; this dictates how the box displays alongside other elements in the same formatting context. It also defines the inner display type, which dictates how boxes inside this element behave.

Example `display:flex`

The flex container behaves like a block element: it displays on a new line and takes up all of the space it can in the inline direction. This is the outer display type of block.

The flex items however are participating in a flex formatting context, because their parent is the element with display: flex, which has an inner display type of flex, establishing the flex formatting context for the direct children.

The flex container behaves like a block element: it displays on a new line and takes up all of the space it can in the inline direction. This is the outer display type of block.

The flex items however are participating in a flex formatting context, because their parent is the element with display: flex, which has an inner display type of flex, establishing the flex formatting context for the direct children.

### Block or inline elements

#### Inline

- `Inline elements` display in the direction of the writing mode of the document. In english it is left to right.
- Images, Form elements, anchor, span, formating elements, code

#### block

- `Blocks` display one after another like paragraphs do in the writing mode of the document. In English, it is top to bottom. In a block formatting context, each box's left outer edge touches the left edge of the containing block
- semantic elements, divs, paragraphs, headers, tables, lists, list items, pre

#### inline-block

- Compared to display: inline, the major difference is that display: inline-block *allows to set a width and height* on the element.
- Also, with display: inline-block, the *top and bottom margins/paddings are respected*, but with display: inline they are not.
- Compared to display: block, the major difference is that display: inline-block *does not add a line-break after the element*, so the element can sit next to other elements.

### Overflow

- Giving an element a fixed height and width, then adding significant content to the box, creates a basic overflow
- The content goes into the box. Once it fills the box, it continues to overflow in a visible way, displaying content outside the box, potentially displaying under subsequent content.
- The property that controls how overflow behaves is the overflow property which has an initial value of visible. This is why we can see the overflow content.
- can be specified individually for each direction using `overflow-x` and `overflow-y` properties
  - scroll - adds scroll bar all the time
  - auto - adds scroll bar when needed
  - hidden - Hides overflowwing content. can be scrolled programatically
  - visible - default and visibilly overflows
  - clip - Hides overflowwing content. cannot be scrolled programatically

- In the Level 3 Overflow specification we have some properties which can help improve the way content looks in an overflow situation.

#### Inline-Axis Overflow

The text-overflow property deals with text overflowing in the inline direction. It takes one of two values clip, in which case content is clipped when it overflows, this is the initial value and therefore the default behaviour. We also have ellipsis which renders an ellipsis, which may be replaced with a better character for the language or writing mode in use.

```css
.box {
    width: 300px;
    border: 5px solid rebeccapurple;
    padding: 10px;
}

.box p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
```

### writing mode

The writing-mode property accepts the values `horizontal-tb`, `vertical-rl` and `vertical-lr`. These values control the direction that blocks flow on the page. The initial value is horizontal-tb, which is a top to bottom block flow direction with a horizontal inline direction. Left to right languages, such as English, and Right to left languages. such as Arabic, are all horizontal-tb.

### Containing Block

- The size and position of an element are often impacted by its containing block
- If the position property is **static, relative, or sticky**, the containing block is formed by the edge of the content box of the nearest ancestor element that is a **block container**
- If the position property is **absolute**, the containing block is formed by the edge of the padding box of the nearest ancestor element that has a position value **other than static**
- If the position property is **fixed**, the containing block is established by the **viewport**