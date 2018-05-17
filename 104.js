// Write a JavaScript program to find the maximal number from a given positive integer by deleting exactly one digit of the given number.


function maximal(num) {
  let arr = num.toString().split('');
  let numArr = [];

  for (var i = 0; i < arr.length; i++) {
    numArr.push(+arr[i]);
  }

  numArr.sort(function(a, b) {
    return a - b;
  }).shift();

  let result = numArr.reduce(function(current, next) {
    return current += next;
  })

  console.log(result);
}


maximal(396);
maximal(932);
maximal(790);