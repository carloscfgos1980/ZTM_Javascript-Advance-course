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

# Lesson 6. Can Everything Be Pure?

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550242

- The ideal is to minimize side effect

# Lesson 7. Idempotent

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550237

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

- Not changing the data, not changing the state. Instead making copies of the state. Check <09.immutability.js>

# Lesson 10. Higher Order Functions and Closures

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550243

HOF - Function that does one of two things
Either takes one or more functions as arguments
Returns a function as a result

Closures - Mechanism for containing some sort of state,
We create a closure whenever a function accesses a variable declared outside
of the immediate function scope

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

// Partial Application
const multiply = (a, b, c) => a _ b _ c;
const partialMultiplyBy5 = multiply.bind(null, 5);
console.log(partialMultiplyBy5(4, 10));

# Lesson 13. MCI: Memoization 1

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550244

# Lesson 14. MCI: Memoization 2

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550251

# Lesson 15. Compose and Pipe

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550248

Compose read from left to right and pipe viceversa

# Lesson 16. Arity

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550247

Arity => A number of arguments a function takes

# Lesson 17. Is FP The Answer To Everything?

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550240

- Check <functional_programming> diagram

# Lesson 18. Solution: Amazon

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550235

# Lesson 19. Reviewing FP

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550245
