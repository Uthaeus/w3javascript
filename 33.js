// Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive.


function check(num1, num2) {
  if (num1 >= 40 && num1 <= 60) {
    console.log('Your first number is between 40 and 60');
  } else if (num1 >= 70 && num1 <= 100) {
    console.log('Your first number is between 70 and 100');
  } else if (num2 >= 40 && num2 <= 60) {
    console.log('Your second number is between 40 and 60');
  } else if (num2 >= 70 && num2 <= 100) {
    console.log('Your second number is between 70 and 100');
  } else {
    console.log('Neither number is within range');
  }
}

check(50, 50);
check(20, 50);
check(20, 20);
check(80, 80);
check(80, 20);