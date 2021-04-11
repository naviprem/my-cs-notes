---
layout: post
title:  "Typescript Types"
date:   2021-04-10
categories: TS
---
Notes from *[Programming Typescript](https://www.amazon.com/Programming-TypeScript-Making-JavaScript-Applications/dp/1492037656)* - author *Boris Cherny*

Type overview

- Unknown
  - Null
  - Void
    - Undefined
  - Any
    - Number
      - NumberEnum
    - BigInt
    - Boolean
    - String
      - StringEnum
    - Symbol
      - UniqueSymbol
    - Object
      - Function
      - Constructor
      - Array
        - Tuple

- Never

## any

- `any` - makes your value behave like it would in regular JavaScript, and totally prevents the typechecker from working its magic
- If you want to use any, you have to be explicit about it. When TypeScript infers that some value is of type any, it will throw a compile-time exception and toss a red squiggly at you in your editor.
- By default, TypeScript is permissive, and won’t complain about values that it infers as any. To get TypeScript to complain about implicit anys, be sure to enable the noImplicitAny flag in your tsconfig.json

## unknown

- Like any, it represents any value, but TypeScript won’t let you use an unknown type until you refine it by checking what it is

```ts
let a: unknown = 30         // unknown
let b = a === 123           // boolean
let c = a + 10              // Error TS2571: Object is of type 'unknown'.
if (typeof a === 'number') {
  let d = a + 10            // number
}
```

## boolean

- The boolean type has two values: true and false

## Type Literal

- A type that represents a single value and nothing else.

```ts
const c = true
let e: true = true
let g: 26.218 = 10          // Error TS2322: Type '10' is not assignable to type '26.218'.
```

## Numeric Separators

- When working with long numbers, use numeric separators to make those numbers easier to read. You can use numeric separators in both type and value positions

```ts
let oneMillion = 1_000_000 // Equivalent to 1000000
let twoMillion: 2_000_000 = 2_000_000
```

## bigint

- lets you work with large integers without running into rounding errors

## string

- is the set of all strings and the things you can do with them

## symbol

- they are used as an alternative to string keys in objects and maps, in places where you want to be extra sure that people are using the right well-known key and didn’t accidentally set the key

## object

- TypeScript’s object types specify the shapes of objects
- JavaScript is generally structurally typed. A style of programming where you just care that an object has certain properties, and not what its name is.

```ts
let a: object = {
  b: 'x'
}
a.b   // Error TS2339: Property 'b' does not exist on type 'object'.
```

- `object` doesn’t tell you a lot about the value it describes, just that the value is a JavaScript object

- Instead you can leave off the explicit annotation, and let TypeScript infer your object’s shape using object literal syntax

```ts
let a: {b: number} = {
  b: 12
}            // {b: number}
```

- In the next example `{firstName: string, lastName: string}` describes the shape of an object, and both the object literal and the class instance from the last example satisfy that shape, so TypeScript lets us assign a Person to c.
  
```ts
let c: {
  firstName: string
  lastName: string
} = {
  firstName: 'john',
  lastName: 'barrowman'
}

class Person {
  constructor(
    public firstName: string,   // public is shorthand for
                                // this.firstName = firstName
    public lastName: string
  ) {}
}
c = new Person('matt', 'smith') // OK
```

- TypeScript is strict about object properties, if you say the object should have a property called b that’s a number, TypeScript expects b and only b. If b is missing, or if there are extra properties, TypeScript will complain.

```ts
let a: {b: number}

a = {}  // Error TS2741: Property 'b' is missing in type '{}'
        // but required in type '{b: number}'.

a = {
  b: 1,
  c: 2  // Error TS2322: Type '{b: number; c: number}' is not assignable
}       // to type '{b: number}'. Object literal may only specify known
        // properties, and 'c' does not exist in type '{b: number}'.
```

- optional properties

```ts
let a: {
  b: number 
  c?: string 
  [key: number]: boolean
}

a = {b: 1}
a = {b: 1, c: undefined}
a = {b: 1, c: 'd'}
a = {b: 1, 10: true}
a = {b: 1, 10: true, 20: false}
a = {10: true}          // Error TS2741: Property 'b' is missing in type
                        // '{10: true}'.
a = {b: 1, 33: 'red'}   // Error TS2741: Type 'string' is not assignable
                        // to type 'boolean'.
```

## Index Signature

- `[key: T]: U` syntax is called an index signature. note that you can use any word for the index signature key’s name

```ts
let airplaneSeatingAssignments: {
  [seatNumber: string]: string
} = {
  '34D': 'Boris Cherny',
  '34E': 'Bill Gates'
}
```

## Readonly object properties

```ts
let user: {
  readonly firstName: string
} = {
  firstName: 'abby'
}

user.firstName // string
user.firstName =
  'abbey with an e' // Error TS2540: Cannot assign to 'firstName' because it
                    // is a read-only property.
```



## Definitive Assignment

- When you declare a variable in one place and initialize it later, TypeScript will make sure that your variable is definitely assigned a value by the time you use it

```ts
let i
let j = i * 3  // Error TS2532: Object is possibly
               // 'undefined'.
```

## Type Aliases

```ts
type Age = number

type Person = {
  name: string
  age: Age
}
let age: Age = 55

let driver: Person = {
  name: 'James May'
  age: age
}
```

- you can’t declare a type twice
- type aliases are block-scoped
- Type aliases are useful for DRYing up repeated complex types
- When deciding whether or not to alias a type, use the same judgment as when deciding whether or not to pull a value out into its own variable

## arrays

- TypeScript supports two syntaxes for arrays: T[] and Array\<T>. They are identical both in meaning and in performance.
- The general rule of thumb is to keep arrays homogeneous. That is, don’t mix apples and oranges and numbers in a single array—try to design your programs so that every element of your array has the same type.
- With heterogeneous arrays, you have to query the type of each item with typeof, checking if it’s a number or a string before you can do anything with it.


## Union and Intersection Types

- TypeScript gives us special type operators to describe unions and intersections of types: | for union and & for intersection
- Unions come up naturally in hetrogeneous arrays

```ts
let f = ['red']
f.push('blue')
f.push(true)                // Error TS2345: Argument of type 'true' is not
                            // assignable to parameter of type 'string'.

let g = []                  // any[]
g.push(1)                   // number[]
g.push('red')               // (string | number)[]
```

- g is the special case: when you initialize an empty array, TypeScript doesn’t know what type the array’s elements should be, so it gives you the benefit of the doubt and makes them any. As you manipulate the array and add elements to it, TypeScript starts to piece together your array’s type. Once your array leaves the scope it was defined in (for example, if you declared it in a function, then returned it), TypeScript will assign it a final type that can’t be expanded anymore:

```ts
function buildArray() {
  let a = []                // any[]
  a.push(1)                 // number[]
  a.push('x')               // (string | number)[]
  return a
}

let myArray = buildArray()  // (string | number)[]
myArray.push(true)          // Error 2345: Argument of type 'true' is not
                            // assignable to parameter of type 'string | number'.
```

## tuples

- Arrays with fixed length and specific type at each index
- Not only do tuple types safely encode heterogeneous lists, but they also capture the length of the list they type.
- Tuples support optional elements too

```ts
let trainFares: [number, number?][] = [
  [3.75],
  [8.25, 7.70],
  [10.50]
]
```

## Immutable arrays

```ts
let as: readonly number[] = [1, 2, 3]     // readonly number[]
let bs: readonly number[] = as.concat(4)  // readonly number[]
let three = bs[2]                         // number
as[4] = 5            // Error TS2542: Index signature in type
                     // 'readonly number[]' only permits reading.
as.push(6)           // Error TS2339: Property 'push' does not
                     // exist on type 'readonly number[]'.
```

## undefined

- means that something hasn’t been defined yet

## null

- means an absence of a value

## void

- is the return type of a function that doesn’t explicitly return anything

## never

- is the type of a function that never returns at all (like a function that throws an exception, or one that runs forever

## enums

- Enums are a way to enumerate the possible values for a type. They are unordered data structures that map keys to values. Think of them like objects where the keys are fixed at compile time, so TypeScript can check that the given key actually exists when you access it
- There are two kinds of enums: enums that map from strings to strings, and enums that map from strings to numbers.
- By convention, enum names are uppercase and singular. Their keys are also uppercase.

```ts
enum Language {
  English,
  Spanish,
  Russian
}
let myFirstLanguage = Language.Russian      // Language
let mySecondLanguage = Language['English']  // Language
```