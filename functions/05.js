// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.


const capitalizer = (str) => {
  var arr = str.split(' ');
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var first = arr[i][0];
    var rest = arr[i].slice(1, arr[i].length);
    var temp = first.toUpperCase() + rest;
    result.push(temp);
  }

  return result.join(' ');
}


console.log(capitalizer('this is a test'));
console.log(capitalizer('here is yet another test'));