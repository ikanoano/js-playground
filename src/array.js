let fruits = ["apple", "orange", "plum"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
fruits[3] = "pear";         // add
console.log(fruits[3]);
fruits[4] = {name: "grape"};// different type
console.log(fruits[4]);


console.log(fruits.pop());
console.log(fruits.pop());
fruits.push("pineapple");
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());

console.log('\nhuge index:');
fruits[1111] = 'orange';
fruits[1113] = 'lemon';
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());

console.log('\nfor-of:');
fruits.length = 0; // clear the fruits
fruits[7] = 'orange';
fruits[5] = 'lemon';
for (const it of fruits) { console.log(it); }

let matrix2d = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
];

console.log(`matrix2d[1][2] = ${matrix2d[1][2]}`);
console.log(`matrix2d = `);
console.log(matrix2d);

fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;  // copy of reference: array is an object
shoppingCart.push("Banana");
console.log(fruits.length);