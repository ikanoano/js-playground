const Jan01_1970 = new Date(0);
console.log( Jan01_1970 );

// add 24(hour) * 60(min) * 60(sec) * 1000 ms
const Jan02_1970 = new Date(24 * 60 * 60 * 1000);
console.log( Jan02_1970 );

const Jan26_2017 = new Date("2017-01-26");
console.log (Jan26_2017);

//  Month and Date is 0-based index !!!
//                             Y  M   D  h  m  s ms?
const Mar25_2017 = new Date(2017, 2, 26, 0, 0, 0, 0);   // seems to be stored as UTC+9
console.log (Mar25_2017);