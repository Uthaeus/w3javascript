// Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.


function addChar(str) {
  if (str.length <= 1) {
    return str;
  } else {
    var first = str.slice(0, 1);

    return first + str + first;
  }
}

console.log(addChar("M"));
console.log(addChar("This"));
console.log(addChar("whatever"));
