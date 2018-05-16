// Write a JavaScript program to find the maximal difference between any two adjacent elements of a given array of integers.


function diff(arr) {
  let newArr = arr.sort(function(a, b) {
    if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });

  let largest = newArr[0];
  let smallest = newArr[newArr.length - 1];

  return largest - smallest;
}


let test = [1, 2, 3, 4, 5, 6];
let test2 = [4, 3, 5, 6, 2, 8];

console.log(diff(test));
console.log(diff(test2));