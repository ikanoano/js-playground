class ValidationError extends Error { // Create custome error
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }

  return user;
}

function test(json) {
  try {
    let user = readUser(json);
  } catch(err) {
    if (err instanceof ValidationError) {
      console.log("Invalid data: " + err.message);
    } else if (err instanceof SyntaxError) {
      console.log("JSON Syntax Error: " + err.message);
    } else {
      throw err;
    }
  }
}
test('{bad json}');
test('{"user.age": 25, "user.name": "Taro"}');