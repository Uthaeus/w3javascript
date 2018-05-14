// Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.


function numCheck(num1, num2) {
  if (num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99) {
    return true;
  } else {
    return false;
  }
}



console.log(numCheck(2, 2));
console.log(numCheck(55, 10));
console.log(numCheck(10, 55));
console.log(numCheck(78, 88));