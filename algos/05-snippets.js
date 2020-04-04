/*
function Employee() {
    this.name = '';
    this.dept = 'general';
}

function Manager() {
    Employee.call(this);
    this.reports = [];
}
Manager.prototype =
    Object.create(Employee.prototype);

function WorkerBee() {
    Employee.call(this);
    this.projects = [];
}
WorkerBee.prototype =
    Object.create(Employee.prototype);

function SalesPerson() {
    WorkerBee.call(this);
    this.dept = 'sales';
    this.quota = 100;
}
SalesPerson.prototype =
    Object.create(WorkerBee.prototype);

function Engineer() {
    WorkerBee.call(this);
    this.dept = 'engineering';
    this.machine = '';
}
Engineer.prototype =
    Object.create(WorkerBee.prototype);

let jim = new Employee;
let sally = new Manager;
let mark = new WorkerBee;
let fred = new SalesPerson;
let jane = new Engineer;
*/

function listAllProperties(o) {
    var objectToInspect;
    var result = [];

    for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    }

    return result;
}

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
    console.log("\nDescription of", varName);
    console.log(".prototype:", object.prototype);
    console.log("prototype chain:", result);
    console.log("Keys:", keys);
}


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


// printAnatomy(Employee, 'Employee');
// printAnatomy(WorkerBee, 'WorkerBee');
// printAnatomy(Engineer, 'Engineer');
// printAnatomy(jane, 'jane');

//---------------------
// jane.bonus = 3000;
// printAnatomy(jane, 'jane');
//
// Employee.prototype.specialty = 'none';
// printAnatomy(jane, 'jane');

//---------------------

// function Hobbyist(hobby) {
//     this.hobby = hobby || 'scuba';
// }
//
// function SalesPerson(name, projs, quota, hobby) {
//     WorkerBee.call(this, name, 'sales', projs);
//     this.quota = quota || 100;
//     Hobbyist.call(this, hobby)
// }
// SalesPerson.prototype = new Hobbyist;
//
// WorkerBee.prototype.city = 'Knoxville';
//
// let cathy = new SalesPerson;
// printAnatomy(SalesPerson, 'SalesPerson');
// printAnatomy(cathy, 'cathy');

//--------------------

// var object = {
//     foo: 'bar',
//     age: 42,
//     baz: {myProp: 12}
// };
// printAnatomy(object, 'object');


//---------------------

// // Animal properties and method encapsulation
// var Animal = {
//     type: 'Invertebrates', // Default value of properties
//     displayType: function() {  // Method which will display type of Animal
//         console.log(this.type);
//     }
// };
//
// // Create new animal type called animal1
// var animal1 = Object.create(Animal);
// animal1.displayType(); // Output:Invertebrates
// animal1.prop1 = 1;
//
// // Create new animal type called Fishes
// var fish = Object.create(animal1);
// fish.type = 'Fishes';
// fish.displayType(); // Output:Fishes
// animal1.prop2 = 2;
//
// printAnatomy(Animal, 'Animal');
// printAnatomy(animal1, 'animal1');
// printAnatomy(fish, 'fish');

//---------------------------

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



