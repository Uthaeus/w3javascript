// Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.


function similar(num1, num2, div) {
  if (num1 % div == 0 && num2 % div == 0 || num1 % div != 0 && num2 % div != 0) {
    return 'Similar';
  } else {
    return 'Not similar';
  }
}


console.log(similar(2, 4, 2));
console.log(similar(6, 9, 3));
console.log(similar(4, 5, 3));
console.log(similar(5, 6, 3));