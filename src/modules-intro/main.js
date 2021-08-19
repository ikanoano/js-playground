// node.js requires {"type":"module"} in package.js to enable module
import {sayHi} from './sayHi.js'
import * as u from './user.js'  // says 'loaded: user.js'
import './user.js'  // don't say 'user.js' anymore

console.log(sayHi);
sayHi(u.user);
sayHi(u.user2); // only exported object can be imported