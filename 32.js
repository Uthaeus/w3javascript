// Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.


function nearest(num1, num2) {
  if (num1 > 100) {
    var first = num1 - 100;
  } else {
    var first = 100 - num1;
  }

  if (num2 > 100) {
    var second = num2 - 100;
  } else {
    var second = 100 - num2;
  }

  if (first < second) {
    console.log('The first number is closer to 100');
  } else {
    console.log('The second number is closer to 100');
  }
}


nearest(98, 90);
nearest(50, 34);
nearest(25, 45);
nearest(125, 130);
