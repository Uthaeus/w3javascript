// Write a JavaScript function that returns array elements larger than a number. 


const largerThan = (arr, n) => {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (n < arr[i]) {
      result.push(arr[i]);
    }
  }
  return result.join(', ');
}

var t1 = [3, 54, 34, 62, 4, 65, 45, 5, 54];

console.log(largerThan(t1, 33));