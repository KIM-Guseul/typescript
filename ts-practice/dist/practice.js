"use strict";
function sum(x, y) {
    return x + y;
}
sum(2, 3);
function sumArray(numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
