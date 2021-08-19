// js can yield
function* generate12() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generate12();

let one = generator.next();
console.log(one); // {value:1, done:false}  - not just '1'
console.log(generator.next()); // {value:2, done:false}
console.log(generator.next()); // {value:3, done:true}
console.log(generator.next()); // {value:undefined, done:true}

let another = generate12();
console.log(another.next()); // {value:1, done:false}

// object having next() which returns {value:any, done:Bool} is iterable.
let g = generate12();
for (const iterator of g) {
  console.log(iterator);
}
console.log("NOTE: 3 won't be printed because done is true !!");

console.log("using yield");
function* generate123() {
  yield 1;
  yield 2;
  yield 3;  // use yield
}
for (const iterator of generate123()) {
  console.log(iterator);
}

console.log("spread operator '...' also works well");
console.log([...generate123()]);

console.log('generator can be Symbol.iterator');
let range = {
  from: 1, to: 5, // [from, to)
  *[Symbol.iterator]() {  // equivalent to [Symbol.iterator]: function* ()
    for (let i = this.from; i < this.to; i++) yield i;
  }
}
console.log([...range]);

console.log('generator unite');
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
function* generatePasswordCodes() {
  for (const iterator of generateSequence(48, 57)) { yield iterator; }
  // yield* do it
  yield* generateSequence(65, 90);  // A..Z
  yield* generateSequence(97, 122); // a..z
}
let str='';
for (const code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}
console.log(str);

console.log('yield is bidirectional');
function* qa() {
  let result = yield "2+2?";
  console.log(result);
}
let qai = qa();
console.log(qai.next().value); // next() returns {value, done}
qai.next(4);  // next(arg) is pushed to yield's return value is qa

console.log('task: pseudo random generator');
function* pseudoRandom(seed) {
  let previous = seed;
  while (true) {
    let next = previous * 16807 % 2147483647;
    yield next;
    previous = next
  }
}
console.log('seed=1');
let random1 = pseudoRandom(1);
console.log(random1.next().value);
console.log(random1.next().value);
console.log(random1.next().value);
console.log('seed=1111111111');
let random2 = pseudoRandom(1111111111);
console.log(random2.next().value);
console.log(random2.next().value);
console.log(random2.next().value);
console.log('seed=1');
let random3 = pseudoRandom(1);
console.log(random3.next().value);
console.log(random3.next().value);
console.log(random3.next().value);