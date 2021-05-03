// string
let name="John";
console.log(`Hello ${1}!`);
console.log(`Hello ${name}!`);
console.log(`Hello ${"name"}!`);
console.log(`the result is ${1+2}`);
console.log("the result is ${1+2}");

// bool
let isGreater = 4>1;
console.log(`4>1 is ${isGreater}`);

// null
let age = null;
console.log(age);

// undefined
let x;
//alert(x); undefined cause an error

let age2 = 100;
age2 = undefined;
//alert(age2)

console.log("\ntypeof:");
console.log(typeof undefined);
console.log(typeof 0);
console.log(typeof 10n);
console.log(typeof true);
console.log(typeof "foo");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof console.log);

