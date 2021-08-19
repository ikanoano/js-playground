async function f() { return 1; }
async function g() { return Promise.resolve(2); }
// async function returns Promise
f().then(console.log);  // console.log(1)
g().then(console.log);  // console.log(2)

async function h(num) {
  let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(num*2), 1000); // calls resolve in 1000 ms
  });
  return await p;
}
h(2).then(console.log); // console.log(2*2)

// now '.then' chain can be await lines
h(2)
  .then(h)
  .then(result => 4 + result)
  .then(h)
  .then(console.log); // console.log((2*2 + 4) * 2)

async function j() {
  let a = await h(2);
  let b = await h(a);
  b += 4;
  let c = await h(b);
  console.log(c); // console.log((2*2 + 4) * 2)
}
j();
