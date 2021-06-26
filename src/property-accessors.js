let user = {
  name:     "Bob",
  surname:  "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(val) {
    [this.name, this.surname] = val.split(' ');
  }
};

console.log(`${user.fullName}`);  // use getter
user.fullName = "John Smith";
console.log(`${user.fullName}`);  // use setter


let user2 = {
  name: "Bob",
  surname: "Smith"
};

// Add getter and setter using 'accessor' property.
Object.defineProperty(user2, 'fullName', {
  get() {return `${this.name} ${this.surname}`},
  set(val){[this.name, this.surname] = val.split(' ');},
  //value: 2  // accessor property can't be a data property
})
console.log(`${user2.fullName}`);  // use getter
user2.fullName = "John Smith";
console.log(`${user2.fullName}`);  // use setter


let user3 = {
  _name: "",
  get name() { return this._name; },
  set name(val) { // filter or convert the input
    if(val.length < 4) {
      console.log("Name is too short, need at least 4 chars");
      return; // don't overwrite
    }
    this._name = val;
  }
}

user3.name = "Pete";
console.log(user3.name);
user3.name = "po";