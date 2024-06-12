//Async Await

//Example 1
async function fetchUsers(){
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data)
}


// Example 2
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
//First Promise as it used to be:



Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(array => {
    console.log('users', array[0])
    console.log('posts', array[1])
    console.log('albums', array[2])
}).catch(()=>console.log('ooops!'))
// The same with async await


const getData = async function(){
    try{
        const [users, posts, albums] = await Promise.all(urls.map(url => // destructoring => [users, posts, albums]
            fetch(url).then(resp => resp.json())
        ))
        console.log(users) // then we can just use the design variable instead of "array[0]"
        console.log(posts)
        console.log(albums)
    } catch(err) {
        console.log('ooops!', err)
    }
}