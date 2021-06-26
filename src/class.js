// prototype-base class
function User_proto_base(name) { this.name = name; }
User_proto_base.prototype.sayHi = function() { console.log(`Hi ${this.name}!`); }
let userp = new User_proto_base("John");
userp.sayHi();

// Use class syntax
class User {
  constructor(name) { this.name = name; }   // no trailing comma needed. class syntax is not an object syntax
  sayHi() {console.log(`Hi ${this.name}!!!`);}
  get name()    {return this._name;}
  set name(val) {if(val.length>4) this._name = val;}

  // values
  //hoge = 2;
}
let user = new User("John");
user.sayHi();

// calss syntax generates constructor and prototype method
console.log(User == User.prototype.constructor);  // constructor is function(...args){super(...args)} if it didn't exist
console.log(Object.getOwnPropertyNames(User.prototype));

// constructor must be called with new
console.log(typeof User); // function, but...
//User(); // error