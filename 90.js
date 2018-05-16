// Write a JavaScript program to find the kth greatest element of a given array of integers


function selector(arr, k) {
  let newArr = arr.sort(function(a, b) {
    if (a < b) {
      return 1;
    } else {
      return 0;
    }
  });

  return newArr[k - 1]
}


let test = [6, 3, 200, 400, 65, 78];
let test2 = [89, 76, 55, 100, 455, 74, 200, 765];

console.log(selector(test, 3));
console.log(selector(test2, 4));