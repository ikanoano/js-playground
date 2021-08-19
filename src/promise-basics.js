let promise = new Promise(
  function (resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  }
).then(
  result  => console.log(result),
  error   => console.log(error)
) ;

function delay(ms) {
  return new Promise(
    resolve => {
      setTimeout(() => {
        resolve(null);
      }, ms)
    }
  )
}
delay(3000).then(()=>console.log('runs after 3 seconds'));