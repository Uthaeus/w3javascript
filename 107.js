// Write a JavaScript program to find the number of sorted pairs formed by its elements of an given array of integers such that one element in the pair is divisible by the other one.



function divisor(arr) {
  let resultArr = [];

  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] % arr[j] == 0 || arr[j] % arr[i] == 0) {
        resultArr.push([arr[i], arr[j]]);
      
      }
    }
  }
  console.log(resultArr);
}

let space = function() {
  console.log('************');
}

let test = [6, 5, 4, 3, 2, 1];
let test2 = [1, 2, 3, 4, 5, 6];
let test3 = [34, 55, 12, 48, 54, 100, 46];

space();
divisor(test);
space();
divisor(test2);
space();
divisor(test3);
space();