//  Write a JavaScript program to check a number from three given numbers where two numbers are equal, find the third one.


function third(num1, num2, num3) {
  var result = 0;

  if (num1 == num2) {
    result = num3;
  } else if (num2 == num3) {
    result = num1;
  } else {
    result = num2;
  }
  return result;
}


console.log(third(3, 4, 3));
console.log(third(5, 5, 3));