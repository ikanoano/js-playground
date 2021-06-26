// Embedded function property "name" and "length"
function sayHi() {console.log("Hi")}
console.log(sayHi.name); // sayHi
console.log(sayHi.length); // 0

let greeting = {
  sayBye: function(po){}
}
console.log(greeting.sayBye.name);  // sayHi
console.log(greeting.sayBye.length); // 1

let arr = [function(){}];
console.log(arr[0].name);   // no name

function createHi() {
  return function() {
    console.log("Yo");
  };
}
console.log(createHi().name); // no name


// Adding custom property
function countCall() {
  // Increment an object property 'count', which is NOT a local variable.
  // Because function is an object, countCall can have a property named count.
  // Isn't it looks like a static variable?
  countCall.count = (countCall.count ?? 0) + 1;

  // countCall has a local variable named count.
  let count = 0;  // This exp doesn't affect to countCall.count.
}
countCall();
countCall();
console.log(`Called ${countCall.count} times!`);


// Named Function Expression (NFE)
let sayYo = function func(who) { // added function name 'func'
  if (who) {
    console.log (`Yo ${who}`);
  } else {
    func('Guest');  // call itself by it name 'func'
    // sayYo('Guest') is equivalent until sayYo is reassigned.
  }

};
sayYo();  // still called by sayYo


// tasks
let makeCounter = () => {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  counter.set = (value) => {return counter.count = value;};
  counter.decrease = () => {return --counter.count;};
  return counter;
};
let c = makeCounter();
console.log(c());
console.log(c());
console.log(c.set(10));
console.log(c.decrease());

let sum = (val) => {
  function inner(val) {
    inner.acc += val;
    return inner;
  }
  inner.acc = 0;
  inner.toString = () => {return inner.acc}
  return inner(val);
}
console.log(sum(2)(2).toString());      // 4
console.log(sum(2)(2)(5).toString());   // 9
console.log(sum(2)(2)(5)(-1).toString());  // 8
