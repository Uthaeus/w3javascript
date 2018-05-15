// Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11.


function sevenEleven(num1, num2) {
  if (num1 % 7 == 0 && num1 % 11 == 0) {
    console.log(`${num1} is a multiple of 7 and 11`);
  } else if (num1 % 7 == 0) {
    console.log(`${num1} is a multiple of 7`);
  } else if (num1 % 11 == 0) {
    console.log(`${num1} is a multiple of 11`);
  } else if (num2 % 7 == 0 && num2 % 11 == 0) {
    console.log(`${num2} is a multiple of 7 and 11`);
  } else if (num2 % 7 == 0) {
    console.log(`${num2} is a multiple of 7`);
  } else if (num2 % 11 == 0) {
    console.log(`${num2} is a multiple of 11`);
  } else {
    console.log('Neither number is a multiple of 7 or 11');
  }
}


sevenEleven(7, 11);