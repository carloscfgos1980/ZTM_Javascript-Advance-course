## Chapter 06. Functional Programming

# Lesson 1. Section Overview

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550234

# Lesson 2. Functional Programming Introduction

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550233

- Functional Programming has an emphasis on simplicity, where data and functions are concerned. We separate them up. They don't have this concepts of clases and methods that belong to objects

# Lesson 3. Exercise: Amazon

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550252

# Lesson 4. Pure Functions

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550232

- Pure Functions don't affect values outside the function and always return a value

# Lesson 5. Pure Functions 2

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550236

- This example. the function affects the global variable (array):

  const array = [1,2,3]
  function removeLastItem(arr) {
  return array.pop()  
  }

- <No side effect>. Pure function, concat method create a copy of the global array as a local variable so doesnt effect the original array:

  const array = [1,2,3]
  function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop()
  return newArray;
  }

- <Referential transparency>. The function will alway return a same output. If I change the parametes, it should not affect the outside world (program)

- The idea with pure functions is that makes them very easy to test, very easy to compose and avoid a lot of bugs, because we have a no mutation, no share state, we have this predictable functions that minimize bugs in our code

# Lesson 6. Can Everything Be Pure?

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550242

- Purity is a conceptual level, there will be alway side effect nevertheless it should be minimum so when we have a bug, we know exactly where to look. The ideal is to minimize side effect
- The goal is organize your code in a way so you isolate this side effects, this database call, APIs call, input-output to a certain location in your program, in your code so your call becomes predictable and easy to debug because, at the end of the day, we need to have certain global state to describe our application
- Ideal functions should do only and task and return something that does not modified the global state, in the example it's create a a local variabe in the function with a copy of the array instead of just using the array that is contain in the global variable, using [].concant

# Lesson 7. Idempotent

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550237

- everytime we run the function, it will return the same result. In the example it is used Math.random() which returns always a different output, that is an example of what <Idempotent> IS NOT
- Code be predictable

# Lesson 8. Imperative vs Declarative

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550249

<Imperative> is a deep description of how something must be done (low level programming language). Eg:
for (let i; i < 1000; i++){
console.log(i)
}

<Declarative> just give a command without much explanation, it is simplier (high level programming language).

[1,2,3].forEach(item => console.log(item))

- Functioning Programming helps us to be more declarative. Declarative code always will end up compile down by imperative language like machine code. The idea of declarative is to go a level higher so is easier to read.

# Lesson 9. Immutability

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550239

- Not changing the data, not changing the state. Instead making copies of the state and return copies of the state every time.
- In this example is used the spread operator (...) in order to make a copy from the global variable (clone)

# Lesson 10. Higher Order Functions and Closures

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550243

HOF - Function that does one of two things
Either takes one or more functions as arguments
Returns a function as a result

Closures - Mechanism for containing some sort of state,
We create a closure whenever a function accesses a variable declared outside
of the immediate function scope, this is a local variable (let count = 0;)

- Check <10.hof-closures.js> for examples

# Lesson 11. Currying

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550250

//Currying
const multiply = (a, b) => a _ b
const curriedMultiply = (a) => (b) => a _ b
curriedMultiply(5)(20)
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(20)

# Lesson 12. Partial Application

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550246

<Partial Application> is very similar to <currying>!

// Partial Application
const multiply = (a, b, c) => a _ b _ c;
const partialMultiplyBy5 = multiply.bind(null, 5);
console.log(partialMultiplyBy5(4, 10));

Partial application, in the second call I get all the arguments.... not really see the use of this right now...

# Lesson 13. MCI: Memoization 1

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550244

- Memorization is a specific form of catching that involve caching the retun value of a function based in its parameters
- Using memorization it will calculate the value once and save in a variable so so the second and third time it will not run the calculation and simply return the value saved in cache. Check the example

# Lesson 14. MCI: Memoization 2

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550251

This it improve the cache function, previos example the cahe variable was in the global scope, instead we use closure, which means create a variable inside the function and modify that variable by returning another function

# Lesson 15. Compose and Pipe

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550248

- Compose allow us to build HOF (High Order functions), build functions together to add extra functionality, to create that data flow, to take a piece of data on all this functions and then we get a sort of data that gets output. Because all those functions are pure and all this functions are composable

- Compose reads from right to left and
- Pipe reads from left to right (like most of the languages)

# Lesson 16. Arity

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550247

Arity => A number of arguments a function takes

# Lesson 17. Is FP The Answer To Everything?

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550240

- Check <Ideal-function> diagram

# Lesson 18. Solution: Amazon

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550235

For this exercise, <compose> approach is used!

- Using spread operatos in compose function coz it has many arguments:
  const compose = (f, g) => (...args) => f(g(...args))

- Reduce to add all the results from the composed functions:
  function purchaseItem(...fns) {
  return fns.reduce(compose)
  }

- Using Object.assign() in order to create a copy of the object and prevent from mutating the global state:
  const updateCart = user.cart.concat(item)
  return Object.assign({}, user, { cart: updateCart })

- Change the price in an array of products (items), using map to iterate thru the array:
  const updatedCart = cart.map(item => {
  return {
  name: item,
  price: item.price\*taxRate
  }
  })

- Add Buy items is to copy the info from the "cart" to the buy key inside user object:
  function buyItem(user) {
  return Object.assign({}, user, {purchases: user.cart})
  }

- After add to buy list, then we empty the "cart" by equal it to an empty array:
  function emptyCart(user) {
  amazonHistory.push(user)
  return Object.assign({}, user, {cart: []})
  }

- Create a history of the purchases:
  Create a variable for amazon history with an empty array:
  const amazonHistory = []

- Add the user to amazonHistory using push method:
  amazonHistory.push({initialState:user})

- Last step I push the user of the previos state and the final state:
  function emptyCart(user) {
  amazonHistory.push({buyedItem:user})
  const updatedUser = Object.assign({}, user, {cart: []})
  amazonHistory.push({buyedItem:updatedUser})
  return updatedUser
  }

# Lesson 19. Reviewing FP

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550245

- check <functions> diagram

- Procedural functions are functions without return statement
