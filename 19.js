// Write a JavaScript program to check a given integer is within 20 of 100 or 400.

function checkNum(num) {
  if (num <= 120 && num >= 80) {
    return true;
  } else if (num <= 420 && num >= 380) {
    return true;
  } else {
    return false;
  }
}

console.log(checkNum(50));
console.log(checkNum(90));
console.log(checkNum(390));