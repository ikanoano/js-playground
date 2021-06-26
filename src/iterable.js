function Range(from, to) {
  this.from = from;
  this.to   = to;
  // Symbol.iterator returns an object which has next() which returns {done, value}
  this[Symbol.iterator] = function() {
    return {
      current:  this.from,
      last:     this.to,

      next() {  // returns element with side effect
        if(this.current <= this.last) {
          return {done:false, value: this.current++};
        } else {
          return {done:true}; // value: whatever
        }
      }
    }
  }
}

for (const num of new Range(1,5)) {
  console.log(num);
}

// or Range has next()
function Range2(from, to) {
  this.from = from;
  this.to   = to;

  // Symbol.iterator returns an object which has next() which returns {done, value}
  this[Symbol.iterator] = function() {
    this.current = this.from; // add a variable 'current'
    return this;
  }

  this.next = function() {
    return {done: this.current>this.to, value: this.current++}
  }
}

// Call iterator explicitly
let it = new Range2(10,12)[Symbol.iterator]();
// eslint-disable-next-line no-constant-condition
while(true) { // "while (it.next())" doesn't work...
  let e = it.next();
  if(e.done) break;
  console.log(e.value);
}

for (let char of '𝒳😂') {
  console.log( char ); // 𝒳, そして次は 😂
}


const arrayLike = {
  0: "zero",
  1: "iti",
  length: 2,
}

const arr = Array.from(arrayLike);        // Convert arrayLike to array and iterable
arr.forEach(e => { console.log(e); });    // arr is array
for (const e of arr) { console.log(e); }  // arr is iterable

