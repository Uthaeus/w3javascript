// Write a JavaScript program to compute the sum of absolute differences of consecutive numbers of a given array of integers.



function diffs(arr) {
  let result = [];

  for (var i = 0; i < arr.length - 1; i++) {
    let temp = undefined;
    if (arr[i] > arr[i + 1]) {
      temp = arr[i] - arr[i + 1];
    } else if (arr[i] < arr[i + 1]) {
      temp = arr[i + 1] - arr[i];
    }
    result.push(temp);
  }
  console.log(result);

  for (var j = 0; j < result.length; j++) {
    console.log(result[j]);
  }
}

let test = [3, 4, 2, 6, 5, 8, 9];

diffs(test);