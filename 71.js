// Write a JavaScript program to check if 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.


function arrayer(arr) {
  if (arr.length < 1) {
    return 'Your array is not large enough to evaluate';
  }

  if (arr[0] == 1 || arr[arr.length - 1] == 1) {
    return true;
  } else {
    return false;
  }
}


console.log(arrayer([1, 2, 3]));
console.log(arrayer([]));
console.log(arrayer([2, 3, 1]));
console.log(arrayer([2, 3, 4]));