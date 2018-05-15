// Write a JavaScript program to test if an array of integers of length 2 contains 1 or a 3.


function test(arr) {
  if (arr.includes(1) || arr.includes(3)) {
    return true;
  } else {
    return false;
  }
}


console.log(test([1, 2, 3, 4, 5]));
console.log(test([2, 4, 5, 6]));
console.log(test([12, 34, 56, 43]));
console.log(test([1, 2, 4, 5, 6]));
console.log(test([2, 3, 4, 5, 6]));
