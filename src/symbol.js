"use strict"

let id1 = Symbol();
let id2 = Symbol("id");
let id3 = Symbol("id");
console.log(id2 == id3); // false
console.log(id1.toString());

let user = { name: "John" };
user[id1] = "ID value";
console.log(user[id1]);
console.log("don't show user[id]");
for (const key in user) {
  console.log(`user[${key}] is ${user[key]}`);  // don't show user[id1]
}

console.log("show user[id]");
const allKeys = Reflect.ownKeys(user)
for (const key in allKeys) {
  const e = allKeys[key]
  console.log(`user[${e.toString()}] is ${user[e]}`);  // don't show user[id1]
}

console.log("init with symbol");
const test = "po";
let initWithSymbol = {
  [id2]: 123,
  "po": 777,
  [test]: 999,
};
let clone = Object.assign({}, initWithSymbol);  // Object.assign can merge data indexed by Symbol
console.log(clone[id2]);
console.log(clone[test]);


// global symbol registry
const id = Symbol.for("id");
const idAgain = Symbol.for("id");
console.log(`global symbol "id": ${id === idAgain}`);  // true
console.log(`local symbol "id":  ${id2 === id3}`);      // false

console.log(`name of global symbol "id" is ${Symbol.keyFor(id)}`);
console.log(`name of local symbol "id" is ${Symbol.keyFor(Symbol("id"))}`);