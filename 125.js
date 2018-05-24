// Write a JavaScript program to find the longest string from a given array.



function longest(str) {
  var current = '';
  var largest = 0;

  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    if (arr[0].length > largest) {
      largest = arr[0].length;
      current = arr[0];
    }
  }
  return current;
}


console.log(longest('This is a test'));
console.log(longest('Another test'));