// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function findSum(num1, num2) {
  if (num1 == num2) {
    var result = (num1 + num2) * 3;
  } else {
    var result = num1 + num2;
  }
  return result;
}

console.log(findSum(3, 6));
console.log(findSum(3, 3));