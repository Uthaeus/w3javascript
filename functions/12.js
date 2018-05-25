// Write a JavaScript function which says whether a number is perfect.


const perfect = n => {
  var numArr = [];

  for (var i = 1; i < n; i++) {
    if (n % i == 0) {
      numArr.push(i);
    }
  }

  var summed = numArr.reduce(function(a, b) {
    return a += b;
  });

  return summed == n;
}


console.log(perfect(6));
console.log(perfect(28));
console.log(perfect(10));