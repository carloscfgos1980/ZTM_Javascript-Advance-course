//this
//is the object that the function is a property of


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
