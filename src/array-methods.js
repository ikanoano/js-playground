let arr = ["I", "study", "Javascript", "right", "now"];

arr.splice(2, 1, "complex", "language");  // remove [2 +: 1] then insert "complex" "language". overwrite arr.
console.log(arr);
let simple = arr.slice(0,4);  // extract [0:4). don't overwrite!
console.log(simple);

arr.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
// if index and array are not needed:
arr.forEach(item => { console.log(`item only: ${item}`); });

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
console.log(user); // John

let results = users.filter( item => item.id<3 ); // equivalent to 'Where' in LINQ but return is not an iterator?
console.log(results);
let lengths = arr.map(item => item.length);
console.log(lengths);

let totalLength = lengths.reduce((sum,cur) => sum+cur, 0);  // 0 is an initial value
console.log(totalLength);

const camelize = src => {
  return src                                            // list-style-image
    .split('-')                                         // [list, style, image]
    .map(word => word[0].toUpperCase() + word.slice(1)) // [List, Style, Image]
    //.reduce((next,prev) => next+prev, "");              // ListStyleImage
    .join('');
};

console.log(camelize("list-style-image"));