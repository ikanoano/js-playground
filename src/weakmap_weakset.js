// WeakMap doesn't prevent GC from disposing object even if one is used as key.
// Only Object can be a key.
let john = { name: "John" };

let weakMap = new WeakMap();
weakMap.set(john, "...");

john = null;  // weakMap[john] is no longer reachable. weakMap[john] should be disposable and john as well.

