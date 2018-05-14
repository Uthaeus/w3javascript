// Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 40 and if two numbers are same return 20.


function checker(num1, num2, num3) {
  if (num1 == num2 && num2 == num3) {
    return 30;
  } else if (num1 == num2 || num2 == num3 || num1 == num3) {
    return 20;
  } else {
    return 40;
  }
}


console.log(checker(3, 4, 5));
console.log(checker(3, 4, 3));
console.log(checker(3, 3, 3));