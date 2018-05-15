// Write a JavaScript program to test if an array of integers of length 2 does not contain 1 or a 3.


function test(arr) {
  if (arr.includes(1) || arr.includes(3)) {
    return false;
  } else {
    return true;
  }
}


console.log(test([1, 2, 4, 5, 6]));
console.log(test([4, 5, 6, 7, 8]));
console.log(test([3, 4, 5, 6]));