---
layout: post
title:  "Javascript - Part 02: Objects"
date:   2018-05-30
categories: JS
---

### Reference: 

Mozilla's Javascript [Tutorials](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Objects and properties

* Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects.
* Unassigned properties of an object are undefined (and not null).

```angular2html
myCar.color; // undefined
```

* note that all keys in the square bracket notation are converted to String type

```angular2html
var myObj = new Object();
var obj = new Object();
myObj[obj] = "object"

```

### Enumerate the properties of an object
* `for...in` loops: This method traverses all enumerable properties of an object and its prototype chain
* `Object.keys(o):` This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.
* `Object.getOwnPropertyNames(o):` This method returns an array containing all own properties' names (enumerable or not) of an object o.

### Different ways to create an object

### Using object initializers 
* Create empty object

```angular2html
var object = {};
```

* Create objects with properties of primitive data types or other objects

```angular2html
var object = {
  foo: 'bar',
  age: 42,
  baz: {myProp: 12}
}
printAnatomy(object, 'object');

```
prints

```angular2html
Description of object
.prototype: undefined
prototype chain:  -> Object
Keys: [ 'foo', 'age', 'baz' ]
```

`Note:` the prototype chain of all these objects will be `-> Object`
* with property definitions

```angular2html
var a = 'foo', 
    b = 42,
    c = {};

var o = { 
  a: a,
  b: b,
  c: c
};
// Shorthand property names (ES2015)
var o = {a, b, c};
```
* Duplicate property names will be overwritten

When using the same name for your properties, the second property will overwrite the first.

### Using a constructor function
* Define the object type by writing a constructor function. There is a strong convention, with good reason, to use a capital initial letter.
* Create an instance of the object with new.

```angular2html
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var mycar = new Car('Eagle', 'Talon TSi', 1993);

```

### Using the Object.create method

* allows you to choose the prototype object for the object you want to create, without having to define a constructor function.

```angular2html
// Animal properties and method encapsulation
var Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function() {  // Method which will display type of Animal
        console.log(this.type);
    }
};

// Create new animal type called animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates
animal1.prop1 = 1;

// Create new animal type called Fishes
var fish = Object.create(animal1);
fish.type = 'Fishes';
fish.displayType(); // Output:Fishes
animal1.prop2 = 2;

printAnatomy(Animal, 'Animal');
printAnatomy(animal1, 'animal1');
printAnatomy(fish, 'fish');
```

Prints

```angular2html
Invertebrates
Fishes

Description of Animal
.prototype: undefined
prototype chain:  -> Object
Keys: [ 'type', 'displayType' ]

Description of animal1
.prototype: undefined
prototype chain:  -> Object -> Object
Keys: [ 'prop1', 'prop2', 'type', 'displayType' ]

Description of fish
.prototype: undefined
prototype chain:  -> Object -> Object -> Object
Keys: [ 'type', 'prop1', 'prop2', 'displayType' ]
```

### Defining methods

* a method is a property of an object that is a function


```angular2html
objectName.methodname = functionName;
```
* where objectName is an existing object, methodname is the name you are assigning to the method, and functionName is the name of the function.

```
var myObj = {
  myMethod: function(params) {
    // ...do something
  }
}

```

```
var myObj = {
  myMethod(params) {
    // ...do something else
  }
};
```

### Using `this` for object references

```angular2html
function displayCar() {
  var result = 'A Beautiful ' + this.year + ' ' + this.make
    + ' ' + this.model;
  console.log(result);
}

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.displayCar = displayCar;
}

var kenscar = new Car('Nissan', '300ZX', 1992);
var vpgscar = new Car('Mazda', 'Miata', 1990);

kenscar.displayCar();
vpgscar.displayCar();

```

Prints

```angular2html
A Beautiful 1992 Nissan 300ZX
A Beautiful 1990 Mazda Miata
```

### Defining getters and setters
* A getter is a method that gets the value of a specific property. 
* A setter is a method that sets the value of a specific property. 
* You can define getters and setters on any predefined core object or user-defined object that supports the addition of new properties. 
* The syntax for defining getters and setters uses the object literal syntax.

```angular2html
var o = {
  a: 7,
  get b() { 
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8
o.c = 50;
console.log(o.a); // 25
```

### Deleting properties

* You can remove a non-inherited property by using the delete operator. The following code shows how to remove a property.

```angular2html
// Creates a new object, myobj, with two properties, a and b.
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log ('a' in myobj); // yields "false"
```
* You can also use delete to delete a global variable if the var keyword was not used to declare the variable:

```
g = 17;
delete g;
```

### Object literal notation vs JSON
The object literal notation is not the same as the JavaScript Object Notation (JSON). Although they look similar, there are differences between them:

* JSON permits only property definition using "property": value syntax.  The property name must be double-quoted, and the definition cannot be a shorthand.
* In JSON the values can only be strings, numbers, arrays, true, false, null, or another (JSON) object.
* A function value (see "Methods" above) can not be assigned to a value in JSON.
* Objects like Date will be a string after JSON.parse().
* JSON.parse() will reject computed property names and an error will be thrown.