// Write a JavaScript program to find if the members of an given array of integers is a permutation of numbers from 1 to a given integer.


const permutation = (arr, num) => {
  var range = [];
  for (var i = 1; i <= num; i++) {
    range.push(i);
  }

  const numCheck = function(n) {
    var numArr = n.toString().split('').map(function(a) {
      return +a;
    });

    for(var j = 0; j < numArr.length; j++) {
      if (!range.includes(numArr[j])) {
        return false;
      }
    }
  }

  for (var k = 0; k < arr.length; k++) {
    numCheck(arr[k]);
  }
  return true;
}


console.log(permutation([1, 2, 3, 4, 5], 5))
console.log(permutation([1, 2, 3, 5], 5))