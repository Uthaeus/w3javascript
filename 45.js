// Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15


function numCheck(num1, num2) {
  var diff1 = num1 - num2;
  var diff2 = num2 - num1;
  var sum = num1 + num2;

  if (num1 == 15 || num2 == 15) {
    return true;
  } else if (diff1 == 15 || diff2 == 15 || sum == 15) {
    return true;
  } else {
    return false;
  }

}


console.log(numCheck(10, 10));
console.log(numCheck(10, 5));
console.log(numCheck(20, 5));
console.log(numCheck(15, 20));