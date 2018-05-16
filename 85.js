// Write a JavaScript code to divide an given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.



function simple(arr) {
  let arrOne = [];
  let arrTwo = [];
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      arrOne.push(arr[i]);
    } else if (i % 2 != 0) {
      arrTwo.push(arr[i]);
    }
  }

  let oneSum = arrOne.reduce(function(current, next) {
    return current += next;
  });
  let twoSum = arrTwo.reduce(function(current, next) {
    return current += next;
  });

  result.push(oneSum, twoSum);
  return result;
}

let test1 = [2, 3, 4, 5, 6];
let test2 = [5, 6, 7, 8, 9];

console.log(simple(test1));
console.log(simple(test2));


function simpler(arr) {
  var result = [0, 0];

  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      result[0] += arr[i];
    } else {
      result[1] += arr[i];
    }
  }

  return result;
}

console.log(simpler(test1));
console.log(simpler(test2));



