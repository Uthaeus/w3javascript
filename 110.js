// Write a JavaScript program to find the number of even values in sequence before the first occurrence of a given number


function evens(arr, num) {
  let count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return count;
    } else if (arr[i] % 2 == 0) {
      count++;
    }
  }

  return count;
}

let test = [1, 4, 6, 3, 7, 14, 20, 45, 46];
let test2 = [4, 50, 34, 2, 13, 12];


console.log(evens(test, 20));
console.log(evens(test2, 50));