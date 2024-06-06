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

let lizard = {
  name: 'Kiki',
  fight() {
    console.log('1');
  }
}
 // const singLizard = dragon.sing.bind(lizard)
 // This example will not work coz "lizard does not have the property of "fire". The way to solve this is to make "dragon" the prototupe of "lizard", that way lizard inherit all the properties and methods of dragon

lizard.__proto__ = dragon;
// lizard.sing()
dragon.__proto__
// Base object
dragon.isPrototypeOf(lizard)