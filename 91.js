// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order.) of a given array of positive integers.


function sums(arr, k) {
  let resultArr = [];
  let newArr = arr.sort(function(a, b) {
    if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });

  for (var i = 0; i < k; i++) {
    resultArr.push(newArr[i]);
  }
  let result = resultArr.reduce(function(current, next) {
    return current += next;
  });
  return result;
}

let test = [2, 2, 2, 2];
let test2 = [4, 3, 7, 8, 22, 44, 3, 2, 65, 100]

console.log(sums(test, 4));
console.log(sums(test2, 4));