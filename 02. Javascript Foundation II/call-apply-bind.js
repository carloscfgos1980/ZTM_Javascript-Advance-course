const wizard = {
  name: "Merlin",
  health: 50,
  heal(n1,n2) {
    return (this.health += n1 + n2);
  },
};

const archer = {
  name: "Robin Hood",
  health: 30,
};

// Call. This method allow to use a function inside certain function to use in a different one
console.log("call 1", archer);
wizard.heal.call(archer, 50, 30);
console.log("call 2", archer);

// Apply. Same as above, just adding []
console.log("call 1", archer);
wizard.heal.bind(archer, [50, 30]);
console.log("call 2", archer);


// Bind. For this to work the function has to be saved in a variable and be called later
console.log("1", archer);
const healA = wizard.heal.bind(archer, 50, 30);
healA() 
console.log("2", archer);