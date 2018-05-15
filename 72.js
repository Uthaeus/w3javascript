// Write a JavaScript program to check if the first and last elements are equal of a given array of integers length 3.


function equal(arr) {
  if (arr.length < 1) {
    return 'Your array is not long enough';
  }

  if (arr[0] == arr[arr.length - 1]) {
    return true;
  } else {
    return false;
  }
}


console.log(equal([1, 2, 3]));
console.log(equal([]));
console.log(equal([2, 3, 4, 5, 2]));