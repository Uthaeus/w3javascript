// Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.


function swap(arr) {
  var first = arr.shift();
  var last = arr.pop();

  arr.unshift(last);
  arr.push(first);

  return arr;
}

let test = [1, 2, 3, 4, 5, 6];

console.log(swap(test));