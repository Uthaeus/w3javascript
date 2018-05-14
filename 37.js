// Write a JavaScript program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case.

function convert(str) {
  var temp = str.slice(0, 3).toLowerCase();

  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return temp + str.slice(3);
  }
}

console.log(convert('if'));
console.log(convert('Testing'));
console.log(convert('TESTing'));