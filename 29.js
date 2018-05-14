// Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.


function numCheck(num1, num2, num3) {
  if (num1 >= 50 && num1 <= 99 || num2 >= 50 && num2 <= 99 || num3 >= 50 && num3 <= 99) {
    return true;
  } else {
    return false;
  }
}


console.log(numCheck(10, 10, 10));
console.log(numCheck(10, 10, 55));
console.log(numCheck(10, 55, 10));
console.log(numCheck(55, 10, 10));
console.log(numCheck(55, 10, 88));
console.log(numCheck(88, 88, 77));
