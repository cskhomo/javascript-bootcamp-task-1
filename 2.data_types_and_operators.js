const number = 1, decimal = 2.5;

let sum = decimal + number;
let difference = decimal - number;
let product = decimal * number;
let quotient = decimal / number;
let remainder = decimal % number;
let power = decimal ** number;

console.log(`${decimal} + ${number} = ${sum}`);
console.log(`${decimal} - ${number} = ${difference}`);
console.log(`${decimal} x ${number} = ${product}`);
console.log(`${decimal} / ${number} = ${quotient}`);
console.log(`${decimal} % ${number} = ${remainder}`);
console.log(`${decimal} ** ${number} = ${power}`);


let unequal = 5 > 3;
unequal = 6 < 9;
unequal = 0 !== 0.0;

let x = 8, y = 12;

const greater = x > y;
console.log(`is ${x} greater than ${y}?:`, greater);

const less = x <= y;
console.log(`is ${x} less than or equal to ${y}?:`, less);

const equal = x === y;
console.log(`is ${x} equal to ${y}?:`, equal);

const not_equal = x !== y;
console.log(`is ${x} not equal to ${y}?:`, not_equal);


let a = true, b = false;

console.log(`${a} AND ${b} is`, a && b);
console.log(`${a} OR ${b} is`, a || b);
console.log(`NOT ${a} is`, !a);


let p = 10;

p += 5;
console.log("p + 5 = ", p);

p -= 4;
console.log("p - 4 = ", p);

p *= 3;
console.log("p x 3 = ", p);

p /= 2;
console.log("p / 2 = ", p);

p %= 1;
console.log("p % 1 = ", p);