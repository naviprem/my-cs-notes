---
layout: post
title:  "WC Overview"
date:   2020-05-31
categories: WC
---
Notes from *Flanagan, David. JavaScript: The Definitive Guide. O'Reilly Media.* Link [here] (https://www.amazon.com/dp/B004XQX4K0/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)
 

## Web Components

The basic HTML elements are no longer enough to build sophisticated web experiences. Modern web application needs a way to re-use commonly used web interfaces. Frameworks enable developers to build web components and share and reuse them across multiple applications, we have seen libraries of angular components, react components. and web components are the browser native alternative for such reusable components.

It is based on 3 html specifications

1. HTML Templates
2. Shadow DOM
3. Custom ELements

- Web components are oftern written as ES6 modules and so the component.js file can be included in your html using a script tag with `type=module`
- The name of the web component should have a hyphen to avoid any name conflict with future native elements.
- Cannot be defined with self-closing tags

### HTML Template

- `<template>` tag and its chidren are never rendered by the web browser.
- It is used to define a reusable structure of html elements.
- A web page needs javascript to make a copy of the template and insert it into the DOM
- represented by HTMLTemplateElement and has a single property called content represented by DocumentFragment

```js
let tableBody = document . querySelector ( "tbody" ); 
let template = document . querySelector ( "#row" ); 
let clone = template . content . cloneNode ( true ); 
tableBody.append(clone)
```

### Custom Element

- Associates a sub class of HTMLElement to a HTML tag name.
- `customeElement.define() method is used to make the association.
- Any existing lement with that tag name is "upgraded" to that subclass.
- If the parser encounters any element with that tag name in future, i will create an instance of the class for each tag.
- Lifecycle methods
  - `connectedCallback()` invoked when an instance of the element is added to the DOM. Widely used for initialization code.
  - `disconnectedCallback()` invoked when element is removed from DOM
  - `observedAttribute` static property, list of attribute names that are being observed for changes. Implemented as a static method. E.g. `static get observedAttributes () { return [ "diameter" , "color" ]; } `
  - `attributeChangedCallback` invoked when an observed attribute is set or changed
  - Can define other custom properties and methods
  - Can have a `constructor()` - constructor must call `super()` before it can use `this`

### Shadow DOM

- Powerful encapsulation mechanism
- Shadow DOM is not part of normal DOM tree (in contrast to Light DOM - regular DOM)
- Not visible to DOM traversal methods
- 3 kinds of shadow DOM encapsulation
  - Elements of shadow DOM are hiddent for regular DOM manipulation methods. Exception is when the web component is implement in open mode. In which case the shadow DOM elements are accessible through the `Shadow Root` property of the `shadow host`.
  - Styles of the shadow DOM and styles of the light DOM are completely independent. The developers of the web component and users of the web component do not have to worry about conflicts and collisions of their stylesheets. Exceptions are, shadow DOM elements will inherit things like fonts, background color