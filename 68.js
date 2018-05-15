// Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.


function newStr(str, num) {
  if (str.length < num) {
    return str;
  }

  let first = str.slice(0, num);
  let last = str.slice(str.length - num);

  return first + ' ' + last;
}


console.log(newStr('this is a test', 4));
console.log(newStr('yo', 4));
console.log(newStr('Hello everybody', 2));