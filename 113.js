// Write a JavaScript program to calculate the sum n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer.


function adder(n) {
  var result = 0;
  var resultArr = [];

  while (n > 0) {
    result += n;
    n = Math.floor(n / 2);
  }
  return result;
}


console.log(adder(8));