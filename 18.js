// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function checkNum(num1, num2) {
  if (num1 == 50 || num2 == 50) {
    return true;
  }

  if (num1 + num2 == 50) {
    return true;
  } else {
    return false;
  }
}

console.log(checkNum(10, 10));
console.log(checkNum(10, 40));
console.log(checkNum(50, 10));