// Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.


function charMover(str) {
  if (str.length < 3) {
    return str;
  }

  let chars = str.slice(str.length - 3);
  let beginning = str.slice(0, str.length - 3);

  let result = chars + beginning;
  return result;
}


console.log(charMover('this is a test'));