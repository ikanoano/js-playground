let animal = {
  eats: true,
  walk() {
    if(this.isSleeping) {
      console.log("zzz");
    } else {
      console.log("tekuteku");
    }
  },
  sleep() { this.isSleeping = true; },
};
let rabbit = {jumps: true};
rabbit.__proto__ = animal;  // A setter for [[Prototype]]

console.log(rabbit.jumps);  // true
console.log(rabbit.eats);   // true; rabbit also has eats 
rabbit.eats = false;
console.log(animal.eats);   // true; Write is done only in rabbit. Prototype is only for peek unless one has a setter
console.log(rabbit.eats);   // false; rabbit.eats is overwritten
animal.eats = true;
console.log(rabbit.eats);   // false; Read animal value

rabbit.walk();  // tekuteku
rabbit.walk = function() {
  if(this.isSleeping) {
    console.log("ppp");
  } else {
    console.log("pyon pyon");
  }
};
rabbit.walk();  // pyonpyon
animal.walk();  // tekuteku

rabbit.sleep(); // 'this' in sleep is rabbit.
console.log(rabbit.isSleeping); // true; isSleeping exists in rabbit
console.log(animal.isSleeping); // undefined; not in animal.