## Chapter 05. Object Oriented Programming

# Lesson 1. Section Overview

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545768

# Lesson 2. OOP and FP

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545780

# Lesson 3. OOP Introduction

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545766

OOP => Object Oriented Programing. It has been around since the 70s

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

- This object contains state (data) and method:

State eg:
name: 'Tanya',
fire: true,

Method eg:
sing() {
if (this.fire) {
console.log(`I am ${this.name}, the breather of fireeeeee`);
}
}

- OOP has to main types:

1. Class based programig language
2. Prototype based programing language

- Object Oriented Programing is about modeling real life objects and relationships

# Lesson 4. OOP1: Factory Functions

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545778

// factory functions

function createElf(name, weapon) {
return {
name: name,
weapon: weapon,
attack() {
return console.log(name + ' attacks with ' + weapon)
}
}
}

const peter = createElf('Peter', 'stones')
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack()

# Lesson 5. OOP2: Object.create()

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545765

const elfFunctions = {
attack: function() {
return 'atack with ' + this.weapon
}
}
function createElf(name, weapon) {
//Object.create creates **proto** link
newElf = Object.create(elfFunctions)
newElf.name = name;
newElf.weapon = weapon
return newElf
}

const sam = createElf('Sam', 'bow');
const peter = createElf('Peter', 'bow');
sam.attack()

- Using "this" keyword wo it will inherit the property of the object on the left (createElf):
  return 'atack with ' + this.weapon

# Lesson 6. OOP3: Constructor Functions

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545779

- Code in file <06.constructor_functions>

- This is the way used to before Object.create()

- Explanation of the "new" keyword. It most be also used with constructors (Function, Array, Object).

- this functions should be named with initial capital letter so we let other programmers know that is a constructor

# Lesson 7. More Constructor Functions

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545773

# Lesson 8. Funny Thing About JS...

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545777

- in Javascript we have constructor Functions for everything (except null undefined) so we can use methods on those constructors

# Lesson 9. OOP4: ES6 Classes

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545774

- In Javascript, Class are just Objects unlike other programs like Java and C++.
- Javascript has Classes as syntatic sugar but class keyword is just <prototypal inherance>
- "new" keyword to create instances. Very important!

# Lesson 10. Object.create() vs Class

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545772

- Some programmers use Object.create() and others use Class
- People prefers use Object.create() in order to avoid "this". People call it pure prototypal inherance instead of pretending is something else.
- Most of the Javascript community uses <Classes> so in code bases, espcially the newer code bases

# Lesson 11. this - 4 Ways

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545769

- Explanation of the use of <this>

# Lesson 12. Inheritance

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545770

class Character {
constructor(name, weapon) {
this.name = name;
this.weapon = weapon;
}

attack() {
return `${this.name} Attack with ${this.weapon}`;
}
}

class Elf extends Character {
constructor(name, weapon, type) {
super(name, weapon);
this.type = type;
}
}

---

- class Elf extends Character => Inherit the properties from Class <Character> and add new properties

- Constructor inside the extended class (subclass) takes the arguments from the super class and the new properties that will be extend:
  constructor(name, weapon, type)

- <super> refers to the inherit properties (state) from the super class:
  super(name, weapon);

# Lesson 13. Inheritance 2

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545781

# Lesson 14. Public vs Private

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545775

# Lesson 15. OOP in React.js

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545776

# Lesson 16. 4 pillars of OOP

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545767

1. <Encapsulation>: Put everything in an container (Object), organize everything into units that model real world applications. We wrap code into boxes that are related to one another so this boxes can interact with each other using the methods and the properties that we made available. This makes code easy to maintain and more reuseable.

2. <Abstraction>: Hidding the complexity from the user. Creating simplers interfaces.

3. <Inheritance>: by inherite from other classes, we avoid to write the same code and we also save memory space by having shared methods

4. <Polimorphism>: To call the same method on different objects and each object responds in different way. We can do method over write or over loaded, this means that a certain method that exists in the super class is overwritten in the subclass

**Goals of coding**

- Clear and Understandable
- Easy to extend
- Easy to maintain
- Memory efficient
- DRY: Don't use the same method over and over again for each object. Instead we had one place where to create functionality

# Lesson 17. Reviewing OOP

https://academy.zerotomastery.io/courses/advanced-javascript-concepts/lectures/12545771
