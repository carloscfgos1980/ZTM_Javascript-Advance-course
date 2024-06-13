## Chapter 09. Modules in JavaScript

# Lesson 1. Section Overview

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12552796

# Lesson 2. What Is A Module?

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12552799

# Lesson 3. Module Pattern

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12552800

- Modules are built with: IIFE => Immediately Invoke Function Expressions

= This is the way is used to be. Just return from the IIFE what we want to make public, so the user can use it and hide the rest of the functionality

- Example in <02.module_pattern.js>

# Lesson 4. Module Pattern Pros and Cons

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12552797

**Pros**

- Modules are selfcontained. It hides variables so it can not be changed and shows to the user the only features that should be changed.

**Cons**

- We still polute the global scope
- It is difficult to have the script tags in the right order

# Lesson 5. CommonJS, AMD, UMD

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12552795

- Modules are locate in NPM (Node Package Management)
- With <CommonJS> modules are meant to be loaded synchronously
- Module bundler will take all javascript files and deploy as a single file in the browser
- Bundle has the benefit of no global name space pollution and order doesn't matter anymore

- Modules were applied 2 main ways: <CommonJS> and <AMD>. That is the problem when there is not standard method

# Lesson 6. ES6 Modules

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12552798

- ES6 came to solve the issues with CommonJS, AMD, UMD

# Lesson 7. Optional: ES2022 Top Level Await

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/42903447

- This is a new feature whre <async> keyword with a function is not longer needed!

# Lesson 8. Optional: ES2022 Await Import

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/42903452

- This new feature allow us to import a variable from a module directly inside the function so "require" method is not longer needed!

# Lesson 9. Section Review

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12552801
