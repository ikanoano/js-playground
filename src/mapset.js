// Map stores key-value pair
let map = new Map();

// Any type can be a key
map
  .set('1', 'str1') // Map returns itself
  .set(1, 'num1')
  .set(true, 'bool1');

console.log(`map.size = ${map.size}`);
console.log(`'1' -> ${map.get('1')}`)
console.log(`1   -> ${map.get(1)}`)
console.log(`true-> ${map.get(true)}`)

console.log("\nObject can be a key (!!!)")
const john = {name: "John"};
const john2 = {name: "John"};
const john_refcopy = john;
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john));
console.log(visitsCountMap.get(john2));
console.log(visitsCountMap.get(john_refcopy));


console.log("\nIterate Map")
let recipeMap = new Map([ // Array of key-value-pair Array
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);
// Iterate keys
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomateos, onion
}
// Iterate values
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}
// Iterate [key, value]
for (let entry of recipeMap) { // equivalent to recipeMap.entries()
  console.log(entry); // cucumber,500 ...
}

const obj = {name: "John", age: 30};
const objmap = new Map(Object.entries(obj));  // Object.entries converts an object to a key-value-pair array that Map takes
console.log(objmap.get('name'));

const prices = Object.fromEntries(recipeMap.entries()); // Invert; 2D Array -> Object
console.log(prices);


// Set doesn't reprecate entries
let set = new Set();

let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps unique values
console.log( set.size ); // 3

for (let user of set) { console.log(user.name); }