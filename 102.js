// Write a JavaScript program to find the number of inversions of a given array of integers.


function inversions(arr) {
  let count = 0;

  for (var i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
    if (arr[i] > arr[j] && i < j || arr[i] < arr[j] && i > j) {
      count++;
    }
  }
  return `Inversions: ${count}`;
}

let test = [1, 6, 4, 7, 8, 3, 5, 3];
let test2 = [4, 12, 4, 35, 3, 25, 6, 12];
let test3 = [1, 2, 3, 4, 5, 6, 7, 8];


console.log(inversions(test));
console.log(inversions(test2));
console.log(inversions(test3));