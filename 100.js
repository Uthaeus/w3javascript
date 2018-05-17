// Write a JavaScript program to check if there is at least one element which occurs in two given sorted arrays of integers.


function both(arr1, arr2, e) {
  return arr1.includes(e) && arr2.includes(e)
}

let test1 = ['a', 3, 'b', 'c', 6];
let test2 = [1, 2, 3, 'a', 'w'];


console.log(both(test1, test2, 3));
console.log(both(test1, test2, 'w'));
console.log(both(test1, test2, 7));
console.log(both(test1, test2, 'a'));