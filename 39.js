// Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.


function summer(num1, num2) {
  var temp = num1 + num2;
  if (temp >= 50 && temp <= 80) {
    return 65;
  } else {
    return 80;
  }
}


console.log(summer(25, 20));
console.log(summer(30, 30));
console.log(summer(50, 40));