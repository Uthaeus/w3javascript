// Write a JavaScript program to check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence.


function check(arr) {
  if (arr[0] > arr[1]) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i + 1] >= arr[i]) {
        return false;
      }
      return "Decreasing";
    }
  } else {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i + 1] <= arr[i]) {
        return false;
      }
      return "Increasing"
    }
  }
}


console.log(check([1, 2, 3, 4, 5]));
console.log(check([5, 4, 3, 2, 1]));

console.log(check([5, 4, 5, 4, 3, 2]));