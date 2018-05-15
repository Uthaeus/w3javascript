// Write a JavaScript program to create a new string without the first and last character of a given string. 


function newStr(str) {
  let result = str.slice(1, str.length - 1);
  console.log(result);
}


newStr('this is a test');
newStr('whatever');