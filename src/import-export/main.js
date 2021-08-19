import {sayHi as hi} from './say.js'; // import as
import * as say from './say.js';  // import *
import DefaultExportedUser from './user.js'; // export default -> not {User} but User
hi('John');
say.sayBye('John');
say.gg('John');
new DefaultExportedUser('John');

export {sayGLHF} from './say.js'; // re-export. Equivalent to "import {sayGLHF} from './say.js'; export {sayGLHF};"