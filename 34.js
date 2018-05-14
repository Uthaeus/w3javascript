// Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.


function larger(num1, num2) {
  if (num1 > num2) {
    console.log('Your first number is larger than the second');
  } else if (num2 > num1) {
    console.log('Your second number is larger than the first');
  } else if (num1 == num2) {
    console.log('Your numbers are equal');
  }
}


larger(10, 5);
larger(5, 10);
larger(5, 5);