---
layout: post
title:  "Javascript - Part 01: Classes and Prototypes"
date:   2018-05-30
categories: JS
---

### Reference: 

Mozilla's Javascript [Tutorials](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### Class-based vs Prototype-based programming languages

* Class based programming languages has classes and instances
* Whereas Prototype based programming Languages does not make this distinction. Instead it has the notion of prototypical objects 
* `Prototypical Objects:` An object which is used as a template from which to get the initial properties for a new object.
* Any object can be a prototype for another object
* Any object can use another object as its prototype and share its properties
* Any object can specify its own properties at creation or run time.

### Defining a class     

* To create a class in javascript, you first create a function definition with a name (typically referred to as constructor function)
* Then, use the `new` keyword with the `constructor function` to create objects

We will use this `printAnatomy()` function to analyse an objects prototypical chain and list of properties

```angular2html
function printAnatomy(object, varName) {
    let result = '';
    let proto = Object.getPrototypeOf(object);
    while (proto) {
        result += ' -> ' + proto.constructor.name;
        proto = Object.getPrototypeOf(proto)
    }
    let keys = [];
    for (let k in object) {
        keys.push(k);
    }
    console.log("\nAnatomy of", varName);
    console.log(".prototype:", object.prototype);
    console.log("prototype chain:", result);
    console.log("Keys:", keys);
}
```

### Inheritance
* There are several ways to define appropriate constructor functions to implement the Inheritance Hierarchy. 
* How you choose to define them depends largely on what you want to be able to do in your application.

```angular2html
function Employee(name, dept) {
    this.name = name || '';
    this.dept = dept || 'general';
}

function WorkerBee(name, dept, projs) {
    Employee.call(name, dept);
    this.projects = projs || [];
}
WorkerBee.prototype = new Employee;

function Engineer(name, projs, mach) {
    WorkerBee.call(this, name, 'engineering', projs);
    this.machine = mach || '';
}
Engineer.prototype = new WorkerBee;

let jane = new Engineer('Doe, Jane', ['navigator', 'javascript'], 'belau');


printAnatomy(Employee, 'Employee');
printAnatomy(WorkerBee, 'WorkerBee');
printAnatomy(Engineer, 'Engineer');
printAnatomy(jane, 'jane');

```

Prints

```angular2html
Description of Employee
.prototype: Employee {}
prototype chain:  -> Function -> Object
Keys: []

Description of WorkerBee
.prototype: Employee { name: '', dept: 'general' }
prototype chain:  -> Function -> Object
Keys: []

Description of Engineer
.prototype: Employee { projects: [] }
prototype chain:  -> Function -> Object
Keys: []

Description of jane
.prototype: undefined
prototype chain:  -> Employee -> Employee -> Employee -> Object
Keys: [ 'projects', 'machine', 'name', 'dept' ]
```

### Adding and removing properties

* You can add or remove properties of any object at runtime. 
* If you add a property to an object that is used as the prototype for a set of objects, all the objects for which it is the prototype also get the new property.

```angular2html
jane.bonus = 3000;
printAnatomy(jane, 'jane');

Employee.prototype.specialty = 'none';
printAnatomy(jane, 'jane');

```
Prints
```angular2html
Description of jane
.prototype: undefined
prototype chain:  -> Employee -> Employee -> Employee -> Object
Keys: [ 'projects', 'machine', 'bonus', 'name', 'dept' ]

Description of jane
.prototype: undefined
prototype chain:  -> Employee -> Employee -> Employee -> Object
Keys: [ 'projects', 'machine', 'bonus', 'name', 'dept', 'specialty' ]
```

### Lookup in the prototype chain

* Property lookup in JavaScript looks within an object's own properties and, if the property name is not found, it looks within the special object property __proto__. This continues recursively; the process is called "lookup in the prototype chain".
* The special property __proto__ is set when an object is constructed; it is set to the value of the constructor's prototype property. So the expression new Foo() creates an object with __proto__ == Foo.prototype. Consequently, changes to the properties of Foo.prototype alters the property lookup for all objects that were created by new Foo().
* Every object has a __proto__ object property (except Object); every function has a prototype object property.

### Global information in constructors
```angular2html
var idCounter = 1;

function Employee(name, dept) {
   this.name = name || '';
   this.dept = dept || 'general';
   this.id = idCounter++;
}
```
The idCounter variable will be invoked everytime you set up a prototype, in addition to those times when you create a new instance object

### No multiple inheritance

* Javascript does not allow for multiple inheritance because, an object can only refer to a single prototype object.
* However, you can have a constructor function call more than one other constructor function within it. This gives the illusion of multiple inheritance.

```angular2html
function Hobbyist(hobby) {
    this.hobby = hobby || 'scuba';
}

function SalesPerson(name, projs, quota, hobby) {
    WorkerBee.call(this, name, 'sales', projs);
    this.quota = quota || 100;
    Hobbyist.call(this, hobby)
}
SalesPerson.prototype = new Hobbyist;

WorkerBee.prototype.city = 'Knoxville';

let cathy = new SalesPerson;
printAnatomy(SalesPerson, 'SalesPerson');
printAnatomy(cathy, 'cathy');
```

Prints:

```angular2html
Description of SalesPerson
.prototype: Hobbyist { hobby: 'scuba' }
prototype chain:  -> Function -> Object
Keys: []

Description of cathy
.prototype: undefined
prototype chain:  -> Hobbyist -> Hobbyist -> Object
Keys: [ 'projects', 'quota', 'hobby' ]
```
* Note that, even though cathy object inherits properties from both `Hobbiest` and `WorkerBee`, its internal [[prototype]]
is to `Hobbiest`. This has 2 implications.
    * Any inherited property of `WorkerBee` is not inherited by `cathy`.
    * Any new properties added to `WorkerBee` will not be dynamically added to `cathy`.

