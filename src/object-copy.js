let showAllElements = obj => {
  for (const key in obj) {
    console.log(`obj.[${key}] is ${obj[key]}`)
  }
}
let user = { name: "John" };
let admin = user;

showAllElements(user);
showAllElements(admin);
user.name = "Steven";
showAllElements(admin);

console.log(`Is user and admin equal? ${user == admin}`); // true
let a = {};
let b = {};
console.log(`Is a and b equal? ${a == b}`); // false

const constUser = {
  name: "John"
}
constUser.age = 25;   // legal
console.log(`constUser.age = ${constUser.age}`);
//constUser = {}      // illegal
Object.defineProperty(constUser, "age", { writable: false });
constUser.age = 30;   // legal but not updated
console.log(`constUser.age = ${constUser.age}`);

const clone = {};
for (const key in user) {
  clone[key] = user[key];
}
clone.name = "Pete"
console.log(`user.name = ${user.name}`);
console.log(`clone.name = ${clone.name}`);

const permissions1 = {canView: true};
const permissions2 = {canEdit: false};

Object.assign(user, permissions1, permissions2);
let clone2 = Object.assign({}, user);
clone2.canView = false;

console.log(`user with merged permission`);
showAllElements(user);

console.log(`cloned user`);
showAllElements(clone2);