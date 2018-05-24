// Write a JavaScript program to find the number of even digits in a given integer.


const evens = (n) => {
  var count = 0;
  var numArr = n.toString().split('').map(function(a) {
    return +a;
  });

  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 == 0) {
      count++;
    }
  }

  return count;
}


console.log(evens(23456));
console.log(evens(86486));