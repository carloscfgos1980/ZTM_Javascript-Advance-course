// Object spread operators

const animals = {
    tiger: 5,
    lion: 2,
    monkey: 10,
    bird: 40
}

const {tiger, lion, ...rest} = animals 
// To get the value from tiger. console.log (tiger) instead of console.log(animals.tiger)
// console.log(rest) give me the object with the values I put in the spread operator

function objectSpreads (p1,p2,p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

objectSpreads(tiger, lion, rest)