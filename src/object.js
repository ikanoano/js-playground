function makeUser(name, age) {
  return {
    //name: name,
    //age: age,
    name,
    age,
    0: "po",  // indexed by "0"; not 0
    udon: undefined,
    1: "pi",
  }
}

let user = makeUser("John", 19);
user.height = 1.9;

console.log(`${user.name} is ${user.height} meter long`)
console.log(`${user["name"]} is ${user["height"]} meter long`)

delete user["height"];

console.log(`${user.name} is ${user.height} meter long`);
console.log(`zero1: ${user["0"]}`);
console.log(`zero2: ${user[0]}`); // looked up with "0"; not 0

console.log(`does name exist? ${"name" in user}`)
console.log(`does hoge exist? ${"hoge" in user}`)
console.log(`does udon exist? ${"udon" in user}`)

for (const key in user) { // declaration order
  console.log(`user.${key} is ${user[key]}`)
}

let nums = {
  49: "yonju kyu",
  51: "goju iti",
  1: "iti",
  42: "yonju ni",
}

for (const key in nums) { // numeric order
  console.log(`user.${key} (${+key}) is ${user[key]}`)
}

// Hello, object
let user2 = {};
user2.name = "John";
user2.surname = "Smith";
user2.name = "Pete";
for (const key in user2) {
  console.log(`user2.${key} is ${user2[key]}`)
}

delete user2.name

// *2 

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
}

let multiplyNumeric = m => {
  for(let i in m) {
    if(typeof(m[i]) !== typeof(1)) continue;
    m[i] *= 2;
  }
}

multiplyNumeric(menu);

console.log("2*");
for (const key in menu) {
  console.log(`menu.${key} is ${menu[key]}`)
}