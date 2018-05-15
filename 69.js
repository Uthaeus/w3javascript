// Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.


function summer(arr) {
  let sum = arr.reduce(function(current, next) {
    return current += next;
  });

  return sum;
}

let test = [5, 4, 3];

console.log(summer(test));