"use strict"

function makeUser() {
  this.name = "John";
  this.money = 1000;

  this[Symbol.toPrimitive] = (hint) => {
  //[Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
}
let user = new makeUser();

console.log(user);        // hint: string -> expected={name: "John"}...??  actual={name: "John", money:1000, [Symbol(...)]: ...}
console.log(+user);       // hint: number -> 1000
console.log(user + 500);  // hint: default -> 1500

