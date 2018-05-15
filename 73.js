// Write a JavaScript program to reverse the elements of a given array of integers length 3.


function reverser(arr) {
  if (arr.length < 1) {
    return 'Array not large enough';
  } else {
    return arr.reverse();
  }
}


console.log(reverser([1, 2, 3, 4, 5, 6, 7]));
console.log(reverser([]));
console.log(reverser([123, 345, 543, 234, 222]));