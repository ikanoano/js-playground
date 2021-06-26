const student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

const json = JSON.stringify(student);
console.log(json);


const ignoredObject = {
  sayHi() { // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined // ignored
};

console.log( JSON.stringify(ignoredObject) ); // {}


// Circular reference not allowed
let room = { number: 23 };
let meetup = { title: "Conference", date: new Date(2222222222222) };
meetup.place = room;
room.occupiedBy = meetup;

//JSON.stringify(meetup); // TypeError: Converting circular structure to JSON

console.log("\nIgnore occupiedBy using replacer");
const meetupStr = JSON.stringify(meetup, function replacer(key, value) {
  console.log(`${key}: ${value}`); // observe what replacer takes
  return (key == 'occupiedBy') ? undefined : value;
}, 2); // spaces=2
console.log(meetupStr);

const meetupRevive = JSON.parse(meetupStr)  // date is string and not a Date !
console.log(meetupRevive);

const meetupRevive2 = JSON.parse(meetupStr, (key, value) => {
  return (key == 'date') ? new Date(value) : value;
})  // date is string and not a Date !
console.log(meetupRevive2);
console.log(meetupRevive2.date.getFullYear());