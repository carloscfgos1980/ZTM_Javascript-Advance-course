## Chapter 1. JavaScript Foundation

# Lesson 1. Section Overview

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538779

# Lesson 2. Javascript Engine

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538778

# Lesson 3. Exercise: Javascript Engine

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538781

# Lesson 4. Inside The Engine

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538780

# Lesson 5. Exercise: JS Engine For All

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538784

ECMAscripts standarize the language of the engines

# Lesson 6. Interpreters and Compilers

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538795

- Engines has Interpreters and Compilers

Babel + TypeScript

Babel is a Javascript compiler that takes your modern JS code and returns browser compatible JS (older JS code).

Typescript is a superset of Javascript that compiles down to Javascript.

Both of these do exactly what compilers do: Take one language and convert into a different one!

# Lesson 7. Inside the V8 Engine

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538792

# Lesson 8. Comparing Other Languages

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538790

# Lesson 9. Writing Optimized Code

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538787

# Lesson 10. WebAssembly

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538796

# Lesson 11. Call Stack and Memory Heap

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538785

# Lesson 12. Stack Overflow

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538786

# Lesson 13. Garbage Collection

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538794

# Lesson 14. Memory Leaks

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538791

# Lesson 15. Single Threaded

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538782

- Single Threaded means is has ONLY one <call stack>.
- Javascript is synchronous

# Lesson 16. Exercise: Issue With Single Thread

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538783

# Lesson 17. Javascript Runtime

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538793

- Check <Javascript runtime> diagram

- The browser uses <WEB API>

- Opend Javascript developer console in google chrome:
  type:
  window

* This will provide all the options of the Web API

* The Web API runs functions in the background (asynchronous) so it will speed up the process. Browser uses "under the hood" low level languague like C++ to performance this operations
  <event loop> only runs once the entire <call stack> is empty and the entire javascript file has been read

Whn we run this script:
console.log('1');
setTimeout(()=>{console.log('2')}, 1000);
console.log('3');

result:
1
3
2

- coz <setTimeout> is sent to the <web API> and the to the <event loop> before it gets to the <call stack>. We'll get the same result even if the waiting time is 0.

# Lesson 18. Node.js

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538788

- Nodejs is not a kanguague. It is a javascript runtime. It is actually a C++ program.
- Nodejs uses Google V8 engine to understand the Javascript but it uses <LIBUV> library which works along to create this event loop to extent what we can do in the background.

- Nodejs does not have <window> object. Instead has <global>. Open the terminal and type:
  node
  global

- Node is a serverside platform based on asynchronous I.O. that is not blocking. It means that it uses Javascript outside of the browser but it creates this entire environment that is runtime, that it allows us to have the same model of a single thread it model but any asynchronous task can be non blocking. That is, they can be passed to worker threads in the background to do the work for us and be sent back to the call back queue and the event loop onto the stack

# Lesson 19. Section Review

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12538789
