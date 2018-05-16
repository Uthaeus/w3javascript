// Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.


function replace(arr, old, newNum) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == old) {
      arr[i] = newNum;
    }
  }
  return arr;
}

let test = [1, 3, 4, 5, 3, 6, 7, 3, 5];

console.log(replace(test, 3, 5));