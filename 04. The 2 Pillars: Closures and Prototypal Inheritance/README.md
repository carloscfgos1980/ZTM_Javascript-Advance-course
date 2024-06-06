## Chapter 04. The 2 Pillars: Closures and Prototypal Inheritance

# Lesson 1. Section Overview

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543662

# Lesson 2. Functions Are Objects

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543660

Functions are special type of objects, they are callable objects

# Lesson 3. Functions are First Class Citizens

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543668

- Functions are First Class Citizens:

1. Functions can be assigned to variables:
   var stuff = function (){}
2. function as argument into a function
   function a(fn){
   fn()
   }
   a(function(){console.log('hi there')})
3. Return functions as values of other functions
   function b(){
   return function c (){ console.log('bye')}
   }
   b() // function c
   b()() // 'bye'

# Lesson 4. Extra Bits: Functions

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543675

- We gotta be careful to initialize a functionin a loop:

Wrong way:
for (let 1 =0; i<5; i++){
function a() { }
a()
}

good practice:
function a() { }
for (let 1 =0; i<5; i++){
a()
}

- It is good to have default parameters in a function:

funcion b (param=6) {
return param
}

b();

# Lesson 5. Higher Order Functions

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543658

Example of Higher Order Function. This function take to arguments: and object and a function.

const giveAccessTo = (name) => {
console.log('Access granted to ' + name)
}
// function simulate the time to check if the person is a user or admon
function authenticate(verify) {
let array = [];
for (let i = 0; i < verify; i++) {
array.push(i)
}
return true
}

function letPerson(person, fn) {
if (person.level === 'admin') {
return fn(500000)
} else if (person.level === 'user') {
return fn(500)
}
// return giveAccessTo(person.name)
}

letPerson({level: 'user', name: 'Tim'}, authenticate)

# Lesson 6. Exercise: Higher Order Functions

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543663

# Lesson 7. Closures

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543659

This example are 2 high order function (return other function) and rgular function:
function a() {
let grandpa = 'grandpa'
return function b() {
let father = 'father'
return function c() {
let son = 'son'
return `${grandpa} > ${father} > ${son}`
}
}
}

a() // function b
a()() // function c
a()()() // 'grandpa > father > son'

- clouser save the varible in the parent funtion in the closures so it can be used by the child function

# Lesson 8. Exercise: Closures

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543667

In this exercise, the const is defined after the setTimeout function and still works. That is because setTimeout is sent to the <web api> and when it returns after 4 seconds, the const (variable) is already saved in memory and it is noe deleted after the callstack is empty because <closures>. Myabe this could be a job interview!

# Lesson 9. Closures and Memory

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543678

- Closures are very important for <memory efficent> and <encapsulaption>

  //This example, the array is created 3 times!
  function heavyDuty(item) {
  const bigArray = new Array(7000).fill('😄')
  console.log('created!');
  return bigArray[item]
  }

heavyDuty(699)
heavyDuty(699)
heavyDuty(699)

const getHeavyDuty = heavyDuty2();
getHeavyDuty(699)
getHeavyDuty(699)
getHeavyDuty(699)

// The array is created is just created once and reuse, due the use of closure (indexed function)
function heavyDuty2() {
const bigArray = new Array(7000).fill('😄')
console.log('created Again!')
return function(item) {
return bigArray[item]
}
}

# Lesson 10. Closures and Encapsulation

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543661

- This example does not work in repl. It needs to be run in chrome dev tool.
- Encapsulation is very important to keep data hide from the user so it won't be modified abd break the app. This comes very handy in modules (NPM)

# Lesson 11. Exercise: Closures 2

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543677

- Problem to solve. With the following condes, the function is run 3 times. Next lesson this is solved!

let view;
function initialize() {
view = 'mountain emoji';
console.log('view has been set');

}

initialize();
initialize();
initialize();
console.log(view);

- In this case the system will initialize 3 times. The way to solve this is to enccapsulate the function as it is shown bellow:

Solution: Closures 2
https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543657

let view;
function initialize() {
let called = 0;
return function() {
if (called > 0) {
return;
} else {
called++;
view = 'mountain emoji';
console.log('view has been set');
}
}
}

const startOnce = initialize();
startOnce();
startOnce();
startOnce();
console.log(view);

# Lesson 12. Exercise: Closures 3

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543669

const array = [1,2,3,4];
for (var i=0; i < array.length; i++) {
setTimeout(function() {
console.log('I am at index ' + i)
}, 3000)
}

// I am at index 4'
// I am at index 4'
// I am at index 4'
// I am at index 4'

---

- The answer is the same, it does not to the sequence of 0,1,2,3 as expected!

Solution: Closures 3
https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543670

change var to let

// Login the index value
const array = [1,2,3,4];
for (let i=0; i < array.length; i++) {
setTimeout(function() {
console.log('I am at index ' + i)
}, 3000)
}

// Loging the actual value:
const array = [1,2,3,4];
for (let i=0; i < array.length; i++) {
setTimeout(function() {
console.log('I am at index ' + array[i])
}, 3000)
}

// I am at index 0'
// I am at index 1'
// I am at index 2'
// I am at index 3'

- <let> allows us to use lexical scoping, which this block {} creates a scope for each "i". When we had "var" is was part of the global scope. So by the time setTimeour return, the for loop is already gone and has turned "i" into "4".

SOLUTION 2. Immediate Invoke function Expression. Create a paramater to keep in the "closure":
const array = [1,2,3,4];
for (var i=0; i < array.length; i++) {
// IIFE
(function(closureI) {
setTimeout(function() {
console.log('I am at index ' + array[closureI])
}, 3000)
})(i)
}

# Lesson 13. Closures Review

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543665

# Lesson 14. Prototypal Inheritance

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543671

- This should be run in chrome dev tool:

const array = []
array.**proto** // returns the Array constructor with all the methods we can use

array.**proto**.**proto** // returns the global object from everything is created in Javascript

- A object ge access to the properties and methods of another object thru the prototype chain

# Lesson 15. Prototypal Inheritance 2

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543680

Example:

let dragon = {
name: 'Tanya',
fire: true,
fight() {
console.log('5');
},
sing() {
if (this.fire) {
console.log(`I am ${this.name}, the breather of fireeeeee`);
}
}
}

let lizard = {
name: 'Kiki',
fight() {
console.log('1');
}
}

lizard.**proto** = dragon;
// lizard.sing()
dragon.**proto**
// Base object
dragon.isPrototypeOf(lizard)

---

In this case by making "drago" a prototype of "lizard", by using <bind> we can invoke lizard with dragon properties. The properties that exists in both object will be overwrite by the binded one(lizard). Ex:

cont singLizard = drangon.sing.bind(lizard)

# Lesson 16. Prototypal Inheritance 3

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543672

- This is just an explanation of how it works and we should never do it:

let dragon = {
name: 'Tanya',
fire: true,
fight() {
console.log('5');
},
sing() {
if (this.fire) {
console.log(`I am ${this.name}, the breather of fireeeeee`);
}
}
}

let lizard = {
name: 'Kiki',
fight() {
console.log('1');
}
}

// get all the prop
for (let prop in lizar) {
console.log(prop)
}

// name
// fire
// fight
// sing

// get only the prop from the lizard object

for (let prop in lizar) {
if(lizard.hasOwnProperty){
console.log(prop)
}  
}

// name
// fight

# Lesson 17. Prototypal Inheritance 4

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543674

- Check <prototype inherance> diagram
- Check <Function protitype chain> diagram

# Lesson 18. Prototypal Inheritance 5

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543679

let human = {
mortal: true
}
let socrates = Object.create(human)
socrates.age = 45

console.log(socrates) // age: 45
console.log(socrates.mortal) //true
console.log(human.isPrototypeOf(socrates)) // true

- We can do prototype inherance without using **proto** which is not recommended, instead we can use Object.create() method

# Lesson 19. Prototypal Inheritance 6

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543676

- Only functions has <prototype> property (method)
- everything in Javascript are objects, also arrays and functions. They inherit, thur the prototype chain from the based object
- Using prototype we avoidn reusing codes, repeating ourselves, avoid adding the same code over and over again and being inefficient with out memory

# Lesson 20. Exercise: Prototypal Inheritance

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543664

// Exercise - extend the functionality of a built in object

// #1
// Date object => to have a new method .lastYear() which
// shows you last year 'YYYY' format.

new Date('1900-10-10').lastYear()
//'1899'

// #Bonus
// Modify .map() to print'🗺️' at the end of each iteration.

console.log([1,2,3].map())

# Lesson 21.Solution: Prototypal Inheritance

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12543673

// Exercise - extend the functionality of a built in object

// #1
// Date object => to have a new method .lastYear() which
// shows you last year 'YYYY' format.

Date.prototype.lastYear = function() {
return this.getFullYear() - 1;
}
new Date('1900-10-10').lastYear()
//'1899'

// #Bonus
// Modify .map() to print'emoji' at the end of each iteration.
Array.prototype.map = function() {
let arr = [];
for (let i = 0; i < this.length; i++) {
arr.push((this[i] + '🗺️'))
}
}
console.log([1,2,3].map())

- This is just a very messy way to explain how thing runs under the hood!
