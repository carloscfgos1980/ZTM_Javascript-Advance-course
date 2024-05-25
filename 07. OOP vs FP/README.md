## Chapter 07. OOP vs FP

# Lesson 1. Composition vs Inheritance

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550238

<INHERITANCE> is a super class that is extended to smaller pieces (subclasses) that add or overwrite things

<COMPOSITION> is about smaler pieces that are combined to create something bigger

# Lesson 2. OOP vs FP

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550241

<OOP> and <FP> both programming paradigm in Javascript

**OOP**

- Organizing the codes into unuts
- An Object is a box containing information and operations that are supposed to refer to the same concept. We are grouping it as an object.
- This pieces of information inside an object are called attributes or state
- Methods are the opperation that happens on the state
- Objects are first class citizen
- PILLARS: abstraction, encapsulation, inheritance, polymorphism

**FP**

- avoiding side effects and write pure functions
- The code is a combination of functions
- data is immutable which leads to write programs with not side effect and pure functions. It means that function can not change the outside world and the out value simply depends on the given arguments. This allow programmers to really have control over program flow
- Functions are first class citizen
- There are high order functions: functions that return another function or use a function as argument

# Lesson 3. OOP vs FP 2

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12550253

**OOP**

- Many operations on fixed data
- Stateless
- Functions are pure, thre are not side effect
- more <imperative>
- It is very good if you have many things that requires few operations

**FP**

- Fewer operations on common data
- Stateful
- There are side effect, methods manipulate our internal state
- Because no side effect, we can run programs in parallel. This makes the paradigm very popular
- It is more <declarative>
- It is very good at processing large data for our application
- It is very good if we have few things that requires a lot of operations
