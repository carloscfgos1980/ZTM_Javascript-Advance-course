// not using memorization, it will calculate 3 times the value

function add80(){
    console.log('long time');
    return n + 80;
}

add80(5);
add80(5);
add80(5);

// using memorization it will calculate the value once and save in a variable so so the second and third time it will not run the calculation and simply return the value saved in cache
// let cache = {} we locate the variable inside the function so we don polute the global scope
function memorizedAdd80(){
    let cache = {};
    return function(n){
        if(n in cache){// is the same to say if(cache.n)
            return cache[n] // is the same to say cache.n
        } else {
            console.log('long time');
            cache[n] = 80 + n;
            return cache[n];
        }
    }
}
const memoized = memorizedAdd80()
console.log(memoized(5));
console.log(memoized(5)); // only makes the calculation once
console.log(memoized(9)); // calculates again coz it makes the check anf the number is not the same