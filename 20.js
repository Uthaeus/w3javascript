// Write a JavaScript program to check from two given integers, if one is positive and one is negative.

function check(num1, num2) {
  if (num1 < 0) {
    var one = "First number is: Negative";
  } else if (num1 >= 0) {
    var one = "First number is: Positive";
  }

  if (num2 < 0) {
    var two = "Second number is: Negative";
  } else if (num2 >= 0) {
    var two = "Second number is: Positive";
  }
  console.log(one);
  console.log(two);
}


check(3, 4);
check(-1, -1);
check(1, -3);