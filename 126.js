// Write a JavaScript program to get the largest even number from an array of integers.


const even = (arr) => {
  var sorted = arr.sort(function(a, b) {
    return b - a;
  });
  var x = 0;
  var result = undefined;

  while (result == undefined) {
    if (sorted[x] % 2 == 0) {
      result = sorted[x];
    } else {
      x++;
    }
  }
  return result;
}


console.log(even([5, 3, 6, 7, 2, 9]));