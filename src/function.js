let hello = 'Yoyo'

function getDefault() {
  //console.log('specify name!');
  return
    "I won't return"
}
function showMessage(name = getDefault()) {
  hello += ' hello'
  console.log(hello + " " + name);
}
showMessage('Alice');
showMessage();

showWelcome(checkAge(17))
showWelcome(checkAge(19))

function showWelcome(comeon) {
  console.log(comeon ? 'welcome!' : 'yahoo.co.jp');
}
function checkAge(age = 0) {
  return age>18 || false//confirm('Did your parents allow you?')
}


const pow = (x,n) => {
  let result =
    n < 0   ? NaN : // don't support negative values
    n % 1   ? NaN : // don't support floating values
    n == 0  ? 1   :
              x*pow(x,n-1);
  return result;
}
console.log(pow(2,8))


module.exports = pow;
