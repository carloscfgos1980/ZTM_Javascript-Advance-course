## Chapter 08. Asynchronous JavaScript

# Lesson 1. Section Overview

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550253

# Lesson 2. How JavaScript Works

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12551439

**what is a program:**

- Allocate memory
- Parse and excute (reads and runs commands)

- Check duagram <javascript engine>. Chrome use V8 engine to allocate data in the <memory heap> and read and run the command in the <callstack>

- <memory leak> is when we full the memory heap with global variable that don't use and evently the browser won't be able to work

- Javascript is a singled thread language that can be non-blocking. That means is has only ONE <call stack>

- Check <Javascript Run - time environment>

# Lesson 3. Promises

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12551440

- A Promise is an object that may produce a single value some time in the future. Either a resolve value or a reson that is not resolved (rejected)
- A Promise maybe in one of three possible states: fullfilled, rejected or pending

- There are 3 examples in <Promises.js> file

# Lesson 4. ES8 - Async Await

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12551442

- It is just like promises but syntatic sugar, it looks prettier with <async await>

- Instead of chainning then to the resolve. This just await the response.

- This new syntatic introduce <try> and <catch> blocks

- Check examples in <04.Async-Await.js>

# Lesson 5. ES9 (ES2018). Object spread operators

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12551441

- This is a new feature in Javascript

// Object spread operators

const animals = {
tiger: 5,
lion: 2,
monkey: 10,
bird: 40
}

const {tiger, lion, ...rest} = animals
// To get the value from tiger. console.log (tiger) instead of console.log(animals.tiger)
// console.log(rest) give me the object with the values I put in the spread operator

function objectSpreads (p1,p2,p3) {
console.log(p1)
console.log(p2)
console.log(p3)
}

objectSpreads(tiger, lion, rest)

# Lesson 6. ES9 (ES2018) - Async

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12551438

- Finally feature in order to execute a prmise even if there is an error

- <for await of> feature to loop over an array of promises

- Check example in file <08.ES9>

# Lesson 7. Job Queue

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12551165

# Lesson 8. Parallel, Sequence, Race

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12551163

- Examples in file <08.parallel-sequence-race.js>

Race => Returns only the first resolved promise
Parallel => Execute all promises in parallel
Sequence => Execute promises one by one, it works like a synchronical system. It is the slowest of all nevertheless it is very usefull for logic of the process. I used in <nasa-project>

# Lesson 9. ES2020: allSettled()

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/25054928

- New ES2020 feature!

Example:

const promiseOne = new Promise((resolve, reject)=>{
setTimeout(resolve, 3000,)
})

const promiseTwo = new Promise((resolve, reject)=>{
setTimeout(reject, 3000,)
})

// Like this it will return and error becoje the recjt result of promiseTwo:

Promise.All([promiseOne, promiseTwo]).then(data => console.log(data))
.catch(e => console.log('something went wront!', e))

// It will return the solved promise (promiseOne) even wehn the second (promiseTwo) is rejected:

Promise.allSettle([promiseOne, promiseTwo]).then(data => console.log(data))
.catch(e => console.log('something went wront!', e))

# Lesson 10. ES2021: any()

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/35654520

There is a new method added to promises in 2021! Unfortunately it isn't a very useful one, but I added here for you as an example that you can play around with using our previous example:

Promise.any() resolves if any of the supplied promises is resolved. Below we have 3 promises, which resolves at random times.

const p1 = new Promise((resolve, reject) => {
setTimeout(() => resolve("A"), Math.floor(Math.random() _ 1000));
});
const p2 = new Promise((resolve, reject) => {
setTimeout(() => resolve("B"), Math.floor(Math.random() _ 1000));
});
const p3 = new Promise((resolve, reject) => {
setTimeout(() => resolve("C"), Math.floor(Math.random() \* 1000));
});
Out of p1, p2 and p3, whichever resolves first is taken by Promise.any().

(async function () {
const result = await Promise.any([p1, p2, p3]);
console.log(result); // Prints "A", "B" or "C"
})();
What if none of the promises resolve? In that case Promise.any() throws an error!

# Lesson 11. Threads, Concurrency and Parallelism

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12551162
