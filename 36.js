// Write a JavaScript program to check if the last digit of the three given positive integers is same.


function check(num1, num2, num3) {
  var first = num1.toString();
  var second = num2.toString();
  var third = num3.toString();

  if (first[first.length - 1] == second[second.length - 1] && second[second.length - 1] == third[third.length - 1]) {
    var result = true;
  } else {
    var result = false;
  }

  console.log(result);
}


check(12, 23, 34);
check(12, 22, 32);
check(102, 202, 302);
check(1003, 2003, 3000);
check(1003, 2003, 3003);