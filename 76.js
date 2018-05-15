// Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.



function newArr(arr) {
  if (arr.length < 2) {
    return 'Not enough info';
  }

  let resultArr = [];
  resultArr.push(arr[0], arr[arr.length - 1]);
  return resultArr;
}


console.log(newArr([1, 2, 3, 4]));
console.log(newArr([2]));
console.log(newArr([3, 4, 5, 6, 7]));