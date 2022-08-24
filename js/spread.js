const max = Math.max(20, 39, 100);
// console.log(max);

const number = [20, 100, 30, 90, 99];
const largest = Math.max(...number);
// console.log(largest);

const numbers = [40, 40, 100, ...number, 4000];
// const numbers = [...number];
numbers.push(444);
console.log(numbers);
console.log(number)