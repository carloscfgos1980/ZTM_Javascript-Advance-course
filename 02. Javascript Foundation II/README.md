## Capter 2. Javascript Foundation II

# Lesson 1. Section Overview

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539493

# Lesson 2. Execution Context

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539494

# Lesson 3. Lexical Environment

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539492

Lexical Environment => where you write codes

# Lesson 4. Hoisting

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539499

In Javascript, variable are partially hoisting and functions are fully hoisting. Wehn we create a variable, Javascript creates space in the Memory Heap for this variable and it is initally undefined. In the example, the console.log is places before the variable is defined and the result is undefined, while the console.log of the function be place before the functions is declared, it does run the function

- Check Diagram <Hoisting I> and <Hosting II>

# Lesson 5. Exercise: Hoisting

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539501

# Lesson 6. Exercise: Hoisting 2

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539509

- hoisting does not work with "const" and it is a pain in the ass so I probably won't use it!

# Lesson 7. arguments Keyword

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539498

- Arguments is a reserved heyword. When we use it inside a function, will contaill the arguments in a object format
- Check <arguments.js> file

# Lesson 8. Variable Environment

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539514

# Lesson 9. Scope Chain

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539496

# Lesson 10. [[scope]]

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539502

# Lesson 11. Exercise: JS is Weird

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539513

# Lesson 12. Function Scope vs Block Scope

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539508

# Lesson 13. Exercise: Block Scope

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539507

- Check file: blocks-vs-functionBlocks

When we use "var" we can access the value outside the scope "{}" but not when we use let or const.

# Lesson 14. Global Variables

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539500

# Lesson 15. IIFE

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539512

IIFE => Immediately Invoke Function Expressions. We can use to avoid polluting the app with global variables

# Lesson 16. this Keyword

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539505

<this> heyword is one of the most confused elements. This == window object.

Example 1. This is the object that the function is a property of

const obj = {
name: "Billy",

sing() {
return console.log(`lalala ${this.name}`);
},

singAgain() {
return console.log(`${this.sing()} saing again!!`);
},
};

obj.singAgain();

// Second example. we can execute the same code for multiple objects
function importantPerson() {
console.log(this.name + "!");
}

const name = "Sunny";
const objt1 = {
name: "Cassy",
importantPerson: importantPerson,
};

const objt2 = {
name: "Jacob",
importantPerson: importantPerson,
};

importantPerson() // Sunny
objt1.importantPerson() //Cassy
objt2.importantPerson() //Jacob

# Lesson 17. Exercise: Dynamic Scope vs Lexical Scope

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539506

# Lesson 18. call(), apply(), bind()

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539495

Function borrowing. This 3 different methods can be used to reuse a nested a function in another funcions. Example in file <call-apply-bind>

# Lesson 19. bind() and currying

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539511

# Lesson 20. Exercise: this Keyword

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539497

_Questions:_
const character = {
name: 'Simon',
getCharacter() {
return this.name;
}
};
const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

_Answer:_
const character = {
name: 'Simon',
getCharacter() {
return this.name;
}
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

# Lesson 21. Context vs Scope

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12539504
