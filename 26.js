// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.


function newStr(str) {
  if (str.length < 3) {
    return str;
  } else {
    var temp = str.slice(-3);
    return temp + str + temp;
  }
}

console.log(newStr("test"));
console.log(newStr("one"));
console.log(newStr("See what happens here"));