// As long as rvalue is iterable, it can be destructured.
let user = {};
const arr = ["Ilya", "Kantor"];
[user.firstName, user.surname] = arr;
console.log(`Hello, ${user.firstName} ${user.surname}`);

// Skip iti and ni. Take san. Ignore the rest.
const [, , third] = ['iti', 'ni', 'san', 'shi', 'go'];
const [, second, ...rest] = ['iti', 'ni', 'san', 'shi', 'go'];  // If I need the rest 
console.log(third); // san
console.log(rest);  // san, shi, go

// set default if undefined
let [name = "Guest", surname = "Anonymous", yourname] = ["Julia"];

console.log(name);    // Julia from array
console.log(surname); // Anonymous as default
console.log(yourname);// undefined


console.log("\ndestructure an Object");
let options = {
  ttile:  "Menu",
  width:  100,
  h:      200,
};

let {a, h, width:w, title:t} = options; // mapped by name

console.log(t);  // Menu
console.log(w);  // 100
console.log(h);  // 200
console.log(a);  // undefined

console.log("\ndestructure a complex Object");
const detailedOptions = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true,
};

let {
  size: {
    width,
  },
  items: [item1, item2],
  title = "Menu" // non-exist item
} = detailedOptions;

console.log(title);  // Menu
console.log(width);  // 100
console.log(item1);  // Cake
console.log(item2);  // Donut