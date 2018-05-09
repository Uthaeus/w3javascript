// Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

function removeLetter(str, ind) {
  var newStr = str.slice(0, ind) + str.slice(ind + 1);
  return newStr;
}

var test = "This is a test";

console.log(removeLetter(test, 2));
console.log(removeLetter(test, 3));
console.log(removeLetter(test, 0));