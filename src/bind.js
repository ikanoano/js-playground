// Losing 'this'
let user = {
  myname: "John",
  sayHi() {
    console.log(`Hello, ${this.myname}`);
  }
}
setTimeout(user.sayHi, 1000);         // Hello, undefined; setTimeout sets 'this' as window

setTimeout(() => user.sayHi(), 1001); // works if user is not overwritten after 1000ms

setTimeout(user.sayHi.bind(user), 1002); // always works as user is bound


setTimeout(() => {
  function f() { console.log (this.name); }
  f = f.bind( {name: "John"} ).bind( {name: "Pete"} );
  f();  // John; cannot change 'this' once it's bound
}, 2000);