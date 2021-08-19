function mul(a,b) { return a * b; }
let double = mul.bind(null, 2); // bind arguments partially - "partial function application"
console.log(double(5)); // 2*5

// if we want to bind arguments but 'this'
function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}
// usage
let user = {
  name: "bob",
  sayname(txt) { console.log(`${txt} bob!`); }
}
user.introduction = partial(user.sayname, "I'm"); // 'this' remains user.
user.introduction();