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

// get all the prop
for (let prop in lizar) {
    console.log(prop)
}

// name
// fire
// fight
// sing

// get only the prop from the lizard object

for (let prop in lizar) {
    if(lizard.hasOwnProperty){
        console.log(prop)
    }  
}

// name
// fight