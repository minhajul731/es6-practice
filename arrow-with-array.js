const numbers = [10, 20, 30, 40, 15, 30, 18, 19];
let newArray = [];
const arrayWithArrowFunction = numbers.map(number => newArray.push(number * 5));
console.log(newArray);
