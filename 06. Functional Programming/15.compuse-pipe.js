// Compose and Pipe



const compose = (f, g) => (data) => f(g(data)); //read from right to left
const pipe = (f, g) => (data) => g(f(data)); //read from left to right

const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndAbsolute(-50));
