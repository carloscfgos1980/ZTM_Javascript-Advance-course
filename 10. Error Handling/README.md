## Chapter 10. Error Handling

# Lesson 1. Section Overview

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12553043

- Errors are not mistake but features

# Lesson 2. Errors In JavaScript

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12553040

Error is a native constructor function in Javascript and I can create new instances of this error and we can pass a message:
new Error('ooops')

<throw> keyword. This stops the execution of the program

Error function has 3 properties. Ex:
const myError = new Error('opps')

myError.name => Error
myError.messahe => 'opps'
myError.stack => String with all the info about the error

# Lesson 3. Try Catch

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12553039

- Try Catch works with synchronous method!

Example in <03.try-catch.js>

# Lesson 4. Async Error Handling

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12553042

Example in <04.async-error-handling.js>

- .catch should be at the end of the chain so it get all the possible errors of the process

# Lesson 5. Async Error Handling 2

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12553044

- This way try and catch blocks can be used to handle errors. Example in <04.async-error-handling.js> from line 26

# Lesson 6. Extending Errors

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12553041

- This method is not so common, it is from the perspctive of OOP, creating an extend subclas from the native constructor function "Error"

# Lesson 7. Section Review

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12553045
