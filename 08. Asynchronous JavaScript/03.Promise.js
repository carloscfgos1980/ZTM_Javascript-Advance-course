// example 1

const promise = new Promise((resolve, reject)=>{
    if(true){
        resolve('Stuff worked!')
    } else {
        reject('Error, it broke!')
    }
})


promise
    .then(result=>result + '!')
    .then(result2=>result2 + '?')
    .then(result3=>result3 + '1')
    .catch(()=>console.log('errrrooo!')) //The catch must be at the end of the chain, otherwise it will not catch all the errors, only the once produces in the chain before it!


// example 2. This method the result is shown when the last promise is resolved
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 100, 'Hiiii!')
 })

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 'Hoooi!')
 })


const promise4 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 3000, 'Is it me you are looking for?')
 })

Promise.all([promise, promise2, promise3, promise4]) // It waits until all the promises are solved and the log out the values
    .then(values=>{
        console.log(values);
    })


// Example 3. 

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(()=>console.log('error!'))

// When I ran this code in google web page I' got an error, instead I googled jsonplaceholder website and everything went smooth