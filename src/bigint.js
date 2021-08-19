const bigint = 1234567890123456789012345678901234567890n;
const sameBigint = BigInt("1234567890123456789012345678901234567890");
const bigintFromNumber = BigInt(10);  // == 10n
console.log(bigint);
console.log(sameBigint);
console.log(bigintFromNumber);
console.log(bigint / sameBigint);

//console.log(bigint + 10); // error: don't mix