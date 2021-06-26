//try {
//  lalala; // undefined variable
//} catch(err) {
//  console.log("name   :");
//  console.log(err.name);    // ReferenceError
//  console.log("message:");
//  console.log(err.message); // lalala is not defined
//  console.log("stack  :");
//  console.log(err.stack);   // ReferenceError: lalala is not defined at ...
//
//  console.log("all in :");
//  console.log(err);
//}

let json = '{ "age": 30 }';

try {
  let user = JSON.parse(json);  // throw error if there is a syntax error
  if(!user.name) throw new SyntaxError("Incomplete data: no name");
  console.log( user.name );     // name doesn't exist; 

} catch (e) {
  if(e.name != "SyntaxError") { throw e}  // re-throw if error is completely not expected
  console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
  console.log( e.name );    // Syntax error
  console.log( e.message ); // "Incomplete data ..."
} finally {
  console.log("Yo");
}