// Write a JavaScript program to find the largest of three given integers.


function largest(num1, num2, num3) {
  var max = 0;
  var arr = [];
  arr.push(num1, num2, num3);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function largest2(...nums) {
  var max = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  return max;
}

console.log(largest(1, 2, 3));

console.log(largest2(9, 8, 7));