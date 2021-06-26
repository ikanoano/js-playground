class A { }
let a = new A();
console.log(a instanceof A);        // ture
console.log(new A() instanceof A);  // ture

let arr = [1, 2, 3];
console.log(arr instanceof Array);  // true
console.log(arr instanceof Object); // true
console.log(arr instanceof A);      // false