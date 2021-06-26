// Adding native prototype which becomes global is a bad idea.

// Add defer function to Function.prototype

Function.prototype.defer = function(ms) {
  setTimeout(() => {
    this(arguments);
  }, ms);
};

function f() { console.log("Hello!"); }
f.defer(1000);


// Someone can overwrite it as ...
Function.prototype.defer = function(ms) {
  const func = this;
  return function(...args) {
    setTimeout(() => { func.apply(this, args); }, ms);
  }
};
function g(a,b) { console.log(a+b); }
g.defer(1000)(1,2);