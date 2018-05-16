// Write a JavaScript program to find the number which appears most in a given array of integers.


function most(arr) {
  let largestCount = 0;
  let mostNum = undefined;
  let newArr = arr.sort(function(a, b) {
    return a - b;
  });

  console.log(newArr);

  for (var i = 0; i < newArr.length; i++) {
    let current = 0;
    if (newArr[i] == newArr[i + 1]) {
      current ++;
    }
    if (current >= largestCount) {
      largestCount = current;
      mostNum = newArr[i];
    }
  }
  console.log(mostNum, largestCount);

}

let test = [1, 2, 3, 2, 2, 2, 3];
let test2 = [45, 3, 4, 6, 3, 56, 7, 3, 56, 3, 21, 3, 22, 3];
let test3 = [2, 3, 4, 3, 2, 3, 4, 2, 3, 4]

most(test);
most(test2);
most(test3);