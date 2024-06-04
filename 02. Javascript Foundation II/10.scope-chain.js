// Scope:
function sayMyName() {
  var a = 'a';
  return function findName() {
    var b = 'b';
    console.log(c) // in this case "c" can not be reaced!
    return function printName() {
      var c = 'c';
      return 'Andrei Neagoie'
    }
  }
}

sayMyName()()() // ()()() is used to go down in the scope chain, in this case printName will be called

function findName() {
  var b = 'b';
  return printName();
}

function printName() {
  var c = 'c'
  return 'Andrei Neagoie'
}

function sayMyName() {
  var a = 'a';
  return findName()
}

sayMyName()