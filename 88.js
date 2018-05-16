// Write a JavaScript program to check whether two given integers are similar or not, if a given divisor divides both integers and it does not divide either.


function similar(num1, num2, div) {
  if (num1 % div == 0 && num2 % div == 0) {
    return 'Numbers are similar';
  } else {
    return 'Not similar';
  }
}

console.log(similar(4, 6, 2));
console.log(similar(3, 5, 5));
