function User(name) {   // constructor method used with 'new'
  // this = {}  // implicit
  this.name = name;
  this.isAdmin = false;
  this.sayHi = () => {
    return `${this.name}, Hi yo`
  }
  // return this // implicit
}

let user = new User("Jack");

console.log(user.name);
console.log(user.isAdmin);
console.log(user.sayHi());


let token = {};
function A() { return token; }
function B() { return token; }
console.log(new A() == new B());  // 'return' in constructor discards 'this'


console.log('calculator:')
let calculator = new Calculator();
console.log(calculator.sum());
calculator.set(2,6);
console.log(calculator.sum());
console.log(calculator.mul());

function Calculator() {
  this.sum = () => { return this.a + this.b; }
  this.mul = () => { return this.a * this.b; }
  this.set = (a, b) => { this.a = a; this.b = b}
}

console.log('accumulator:')
let acc = new Accumulator(1);
console.log(acc.value);
acc.read(10);
console.log(acc.value);
acc.read(-9);
console.log(acc.value);

function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = (newValue) => { this.value += newValue; }
  this.print = () => {}
}
