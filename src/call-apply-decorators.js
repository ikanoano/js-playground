console.log("func.call");
function slow(x) {
  // some slow job
  let tobex = 0;
  for (let i = 0; i < x; i++) tobex++;
  return tobex;
}

// wrap slow but deterministic function
function cachingDecorator(func) {
  const map = new Map();
  return function(x) {  // it need to be a function. not a ()=>{}
    if(!map.has(x)) map.set(x, func.call(this, x));  // set context as "this" in x run
    return map.get(x);
  }
}

let cachedSlow = cachingDecorator(slow);
console.log(cachedSlow(1234567891));
console.log(cachedSlow(1234567899));
console.log(cachedSlow(1234567891));

let worker = {
  someMethod(){return 1;},
  slow(x){return x + this.someMethod();}
};

console.log(worker.slow(1));                          // original worker.slow works
// eslint-disable-next-line no-unused-vars
let cachedWorkerSlow = cachingDecorator(worker.slow); // pass worker as context
//console.log(cachedWorkerSlow(1));                     // doesn't work because of "this" in slow()

worker.slow = cachingDecorator(worker.slow);          // overload slow by the wrapper wrapping slow
console.log(worker.slow(1));                          // now it works because of "this" in slow() in wrapper is valid


console.log("func.apply");
let worker2 = {
  slow2: function(from, to) { // if there is 2 arguments ...?
    // some slow job
    let diff = 0;
    for (let i = from; i < to; i++) diff++;
    return diff;
  }
}

function cachingDecorator2(func) {
  const map = new Map();
  function hash(arraylike) {
    //console.log(arraylike);
    //return arraylike.reduce((prev,curr)=>(prev+","+curr), "hash")
    return [].join.call(arraylike); // borrow [].join() with forcing 'this' to be arraylike.
  }
  return function(...args) {  // it need to be a function. not a ()=>{}
    const x = hash(args); // get hash of array-like args
    //console.log(`hash is "${x}"`);  // hash is "7890,1234567890"
    if(!map.has(x)) map.set(x, func.apply(this, args));  // apply args to func
    return map.get(x);
  }
}

worker2.slow2 = cachingDecorator2(worker2.slow2);
console.log(worker2.slow2(7890, 1234567890));
console.log(worker2.slow2(7891, 1234567890));
console.log(worker2.slow2(7890, 1234567890));


setTimeout( () => {
  console.log("Debounce decorator");
  // Create an wrapper function that allows function call only once for each ms milliseconds
  function debounce(func, ms) {
    function inner() {
      if (!inner.ready) return; // ignore if not ready
      inner.ready = false;
      func.apply(this, arguments);
      setTimeout(() => inner.ready = true, ms);
    }
    inner.ready = true;
    return inner;
  }
  let f = debounce(console.log, 1000);  
  f(1); // ran
  f(2); // ignored
  setTimeout( () => f(3), 100);   // ignored
  setTimeout( () => f(4), 1100);  // ran
  setTimeout( () => f(5), 1500);  // ignored
}, 0);

setTimeout( () => {
  console.log("throttle decorator");
  // Similar to debounce, but run the last call once ignored after the timer expiration
  function throttle(func, ms) {
    function inner() {
      if (!inner.ready) {
        // reserve the last call
        inner.delayed = arguments;
        return; // ignore once
      }
      inner.ready = false;
      func.apply(this, arguments);
      setTimeout(() => {
        inner.ready = true;
        if(!inner.delayed) return
        // If there is a delayed call, revive it.
        const tmp = inner.delayed;
        inner.delayed = undefined;
        inner(...tmp);
      }, ms);
    }
    inner.ready = true;
    return inner;
  }
  let f1000 = throttle(console.log, 1000);
  f1000(1); // shows 1
  f1000(2); // throttling 
  f1000(3); // throttling but output after 1000ms
}, 2000);