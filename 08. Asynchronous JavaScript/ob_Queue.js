
//Callback Queue -Task Queue
setTimeout(()=>{console.log('1', 'is the loneliest number')}, 0)
setTimeout(()=>{console.log('2', 'can be as bad as one')}, 10)

//2 Job Queue - Microtask Queue
Promise.resolve('hi').then((data)=> console.log('2', data))

//3
console.log('3','is a crowd')

//Result:
// 3 is a crowd
// 2 hi

// 1 is the loneliest number
// 2 can be as bad as one

/*
The application runs and return first the callback stack: console.log('3','is a crowd')
Then the Job Queue 
and Finally Callback Queue
*/
