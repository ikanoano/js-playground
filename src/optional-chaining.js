"use strict"

let user = {
  po: 3,
};

console.log(user.address);  // undefined
/*
console.log(user.address.street);  // error
console.log(undefined.street);  // error
*/
console.log(user?.address?.street);   // undefined

/*
console.log(user?.address.street);   // error
*/
console.log(user?.po);   // 0


user = null;
let x = 0;
user?.sayHi(++x); // ++x won't be evaluated; (sayHi exists) && ++x
console.log(x);

let user1 = {
  admin: () => { return true },
  po: 3,
};
let user2 = {};
console.log(user1.admin?.()); // ture
console.log(user2.admin?.()); // undefined

//console.log(user["doesn't exist"]);    // error (user is null)
console.log(user?.["doesn't exist"]);  // undefined (what's the difference?)

// user2?.name = "John"; // error; equivalent to 'undefined = "John"'
user2.name = "John";
