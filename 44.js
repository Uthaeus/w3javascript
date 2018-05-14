// Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others.


function check(num1, num2, num3) {
  if (num1 >= 20 && num1 < num2 || num1 < num3) {
    return true;
  } else if (num2 >= 20 && num2 < num1 || num2 < num3) {
    return true;
  } else if (num3 >= 20 && num3 < num1 || num3 < num2) {
    return true;
  } else {
    return false;
  }
}


console.log(check(10, 10, 30));
console.log(check(10, 40, 30));
console.log(check(50, 40, 30));
console.log(check(2, 2, 2));