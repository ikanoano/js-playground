let str = "Hello"
console.log(str.toUpperCase()); // we can call methods on primitives via 'object wrapper'

let n = 1.23456;
console.log(n.toFixed(4));

str.test = 5; // write 5 to str's wrapper object, which will soon be discarded
console.log(str.test);

const randomInteger = (min, max) => {
  const rnd = Math.random() * (max - min + 1);
  return Math.floor(rnd) + min;   // assuming min=5 and max=15, return [0,1) -> [0,11) -> [0,10] in int + 5
}

let acc = {};
for (let i = 0; i < 110000; i++) {
  const rnd = randomInteger(5,15);
  acc[rnd] = (acc[rnd] ?? 0) + 1;
}
for (const key in acc) {
  console.log(`${key} choosed ${acc[key]} times`)
}
