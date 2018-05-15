// Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.


function mids(arr1, arr2) {
  if (arr1.length < 3 || arr2.length < 3) {
    return 'Not enough info';
  }

  let first = arr1[Math.floor(arr1.length / 2)];
  let second = arr2[Math.floor(arr2.length / 2)];
  let resultArr = [];
  resultArr.push(first, second);

  return resultArr;
}


console.log(mids([1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7]));
console.log(mids([2], [3, 4]));
console.log(mids([4, 5, 6, 7, 8, 9, 10], [5, 4, 3, 2, 1]));
