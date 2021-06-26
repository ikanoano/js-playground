"use strict"

let user = {
  name: "John",
  age:  26,
  height:  155,
  //sayHi: () => {      // equivalent to next line
  //sayHi: function() { // equivalent to next line
  sayHi() {
    console.log(`Hi ${this.name},`);
  },
};
user.sayHi();

function sayAge() {
  console.log(`I'm ${this.age} years old.`);  // this will be evaluated when it's called
}
user.f = sayAge;
user.f();

user.g = () => {console.log(`I'm ${this.height} cm high`)}; // 'this' in an arrow function is 'this' here
user.g();

// sayAge();    // error

function makeUser() {
  return {
    name: "John",
    ref: this,
    ref2() { return this; }
  }
}
let muser = makeUser();
// console.log(muser.ref.name); // error. 'this' seems to be evaluated when makeUser makes user.
console.log(muser.ref2().name); // John

let calculator = {
  a: 6,
  b: 25,
  sum: function() { return this.a + this.b; },
  mul: function() { return this.a * this.b; },
}

console.log(calculator.sum());
console.log(calculator.mul());
