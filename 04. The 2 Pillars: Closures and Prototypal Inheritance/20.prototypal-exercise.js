// Exercise - extend the functionality of a built in object

// #1
// Date object => to have a new method .lastYear() which
// shows you last year 'YYYY' format.


new Date('1900-10-10').lastYear()
//'1899'

// #Bonus
// Modify .map() to print'🗺️' at the end of each iteration.

console.log([1,2,3].map())

//Solution
// Exercise - extend the functionality of a built in object

// #1
// Date object => to have a new method .lastYear() which
// shows you last year 'YYYY' format.

Date.prototype.lastYear = function() {
  return this.getFullYear() - 1;
}
new Date('1900-10-10').lastYear()
//'1899'

// #Bonus
// Modify .map() to print'emoji' at the end of each iteration.
Array.prototype.map = function() {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push((this[i] + '🗺️'))
  }
}
console.log([1,2,3].map())