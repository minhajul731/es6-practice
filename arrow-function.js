// single parameter arrow function
const output = number => number / 5;
// console.log('Result is', output(24));

// multiple parameter arrow function
const multi = (number1, number2) => (number1 + 2) * (number2 + 2);
const towNumbersMulti = multi(2, 3);
// console.log(towNumbersMulti);

const threeNumbersMulti = (num1, num2, num3) => num1 * num2 * num3;
// console.log(threeNumbersMulti(3, 4, 5));

// default parameter
const numbers = (firstNumber, secondNumber, thirdNumber = 7) => {
    const total = firstNumber + secondNumber + thirdNumber;
    return total;
}
const sum = numbers(2, 5);
console.log(sum);