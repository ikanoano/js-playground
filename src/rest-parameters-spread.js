// rest parameters using ...
function sumAll(...args) {  // args is an iterator or array?
  return args.reduce((acc,cur)=>{return acc+cur}, 0);
}

console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6


// spread parameters using ...
console.log(Math.max(1,2,3,4,5)); // Math.max takes comma separated arg list
const arr1 = [1, -2, 3, 4];
const arr2 = [8, 3, -8, 1];
console.log(Math.max(arr1));      // NaN
console.log(Math.max(...arr1));   // 4
console.log(Math.max(...arr1, ...arr2));   // 8

const arr3 = [...arr1, ...arr2];  // nandemo ari
console.log(Math.max(...arr3));
