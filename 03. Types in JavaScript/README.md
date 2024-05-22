## Chapter 03. Types in JavaScript

# Lesson 1. Section Overview

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12540594

# Lesson 2. Javascript Types

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12540595

Types:
// Primitive

- Boolean
- Number
- String
- Undefined
- Null
- Symbol('just me')

// Non-primitive

- Object {}
- Array []
- Function (){}

* Javascript has an operator to find the type:
  typeof

<undefined> is the absense of definition, <null> is the absense of value

<array> and <functions> are objects!

- <Primitive values> are like atoms, they can not be break it!
- <Non-Primitive values> doesn't contain the actual value directly. In a onject, the value is not contain there, instead it has a reference

Built-in objects in Javascript:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

-Why an array is consider an object:

var array1 = ['person', 'woman', 'man', 'camera', 'TV']

var array1 = {
0:'person',
1:'woman',
2:'man',
3:'camera',
4: 'TV'
}

# Lesson 3. Array.isArray()

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12540596

Example if something is an array
array1 = [1,2,3]

Array.isArray(array1)

# Lesson 4. Pass By Value vs Pass By Reference

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12540593

Primitive => Pass By Value

Non-Primitive => Pass By Reference

// Primitive types are immutable

var a = 5;
var b = a;

b++;
// console.log(a)
// console.log(b)

let obj = {
a: 'a',
b: 'b',
c: {
deep: 'try and copy me'
}
};

// This clone at first level so if a function or array in index in the object, the changes made to the orginal object will affect the cloned object:

let clone = Object.assign({}, obj)
// spread operator ...
let clone2 = {...obj}

// This will keep separate the values of the original object and the cloned object but it consumes a lot of resources. It is very rare to be used, actually:

let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(obj)
console.log(clone)
console.log(clone2)
console.log(superClone)

# Lesson 5. Exercise: Compare Objects

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/13221046

How would you compare two objects if they are pointing to a different location in memory but still have the same properties?

var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = user1 == user2;
alert(eq); // gives false

Answer:
var eq = user1 == user2;
alert(eq); // gives false

var eq = Object.toJSON(user1) == Object.toJSON(user2);
alert(eq); // gives true

# Lesson 6. structuredClone

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/47358150

For the longest time, you had to resort to workarounds and libraries to create a deep copy of a JavaScript object. However, most browsers have a new structuredClone(), a built-in function for deep-copying!

https://web.dev/articles/structured-clone

# Lesson 7. Type Coercion

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12540597

Example:
1 == '1' // true

- Javascript coer the result and equal both values. In order to avoid this, it's better to use:
  1 === '1' // false

# Lesson 8. JTS: Dynamic vs Static Typing

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12541140

- With Static type language, we have to declare the variable explicitly before using it. Ex:
  int a;
  a = 100

- Dynamicly type language are not bound to this constrict, not bound to a particular type. Type checking is done during run time. Ex:
  var a = 100;

**Static pro:**

- Self documented
  function sum (a:number, b:number) {
  retunr a + b;
  }
- Helpful auto complition in text editors (VScode)
- You'll get less bug into production (compile time)

**Static cons:**

- the code is a little more harder to read
- forgetting to write good unit test
  -slower development process

---

Typescript allows Javascript to behave like a static language. It makes Javascript extra save!

# Lesson 9. JTS: Weakly vs Strongly Typed

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12541141

Javascript is a weak type. You can add a string to a number. Javascript engine will convert the number into a string. Eg:

var a = 'buuyaaaa';
a + 17 // 'buuyaaaaa17'

- In python that is not possible, that is why is considered a strong language

# Lesson 10. JTS: Static Typing In JavaScript

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12541143
