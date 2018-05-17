// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.


function numberCheck(num1, num2) {
  return Number.isInteger(num1 / num2);
}


console.log(numberCheck(4, 2));
console.log(numberCheck(5, 6));
console.log(numberCheck(2, 4));