// try {
//   setTimeout(function() {
//     fakevariable;
//   }, 1000)
// } catch (error) {
//   console.log('got it', error)
// }

// .catch

Promise.resolve('asyncfail')
  .then(response => {
    Promise.resolve().then(() => {
      throw new Error('#3 fail')
    }).catch(console.log)
    return 5
  })
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.log('final error', error)
  })


  // Async Error Handling 2

  (async function() {
  try {
    await Promise.resolve('oopsie #1')
    await Promise.reject('oopsie #2')
  } catch (err) {
    console.log(err)
  }
  console.log('is this still good?')
})()