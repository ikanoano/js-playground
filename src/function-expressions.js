let sayhi = function() {
  return console.log("hello")
}
let yoyo = sayhi;
console.log(sayhi)
console.log(yoyo)
console.log(sayhi())
console.log(yoyo())

function ask(yourok, yes, no) {
  if(yourok) { yes() } else { no() }
}
ask(true,  showOk, showCancel)
ask(false, showOk, showCancel)
function showOk() { console.log('agree') }
function showCancel() { console.log('canceled') }
