// Write a JavaScript program to find the maximal difference among all possible pairs of a given array of integers


function diff(arr) {
  let result = [];
  let newArr = arr.sort(function(a, b) {
    return b - a;
  });

  console.log(newArr);

  for (var i = 0, j = newArr.length - 1; i < newArr.length / 2; i++, j--) {
    result.push(newArr[i] - newArr[j]);
  }

  console.log(result);

  for (var k = 0; k < result.length; k++) {
    console.log(result[k]);
  }
}

let test = [2, 4, 3, 5, 6, 1];
let test2 = [10, 55, 45, 37, 99, 122, 205, 65, 703, 1, 43, 657, 544, 54];

diff(test);
console.log('******************');
diff(test2);