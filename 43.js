// Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.

function check(num1, num2, num3) {
  var first = num1.toString();
  var second = num2.toString();
  var third = num3.toString();

  if (first[first.length - 1] == second[second.length - 1] && second[second.length - 1] == third[third.length - 1]) {
    return true;
  } else {
    return false;
  }
}


console.log(check(22, 32, 33));
console.log(check(22, 32, 42));