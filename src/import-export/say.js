function sayHi (user) { console.log(`Hello, ${user}!`); }
function sayBye(user) { console.log(`Bye, ${user}!`); }
function sayGG(user) { console.log(`GG, ${user}!`); }
function sayGLHF(user) { console.log(`GLHF, ${user}!`); }
export {sayHi, sayBye, sayGLHF}; // export after definition
export {sayGG as gg}; // export as
