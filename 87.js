// Write a JavaScript program to check whether two arrays of integers and same length are similar or not. The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.


function arrays(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    if (!(arr2.includes(arr1[i]))) {
      return 'Not similar';
    } else {
      return 'Similar';
    }
  }

}

let test1 = [2, 3, 4, 5];
let test2 = [3, 2, 5, 4];
let test3 = [4, 5, 6, 7];

console.log(arrays(test1, test2));
console.log(arrays(test2, test3));