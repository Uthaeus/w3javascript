// Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8.

function determine(num1, num2) {

  var temp = num1 + num2;

  return (num1 == 8 || num2 == 8 || temp == 8) 
}


console.log(determine(4, 4));
console.log(determine(3, 5));
console.log(determine(8, 4));
console.log(determine(3, 3));