// Write a JavaScript program to test if a string end with "Script". The string length must be greater or equal to 6.


function stringCheck(str) {
  if (str.length < 6) {
    return 'Your string is not long enough to evaluate';
  }

  let temp = str.slice(str.length - 6);

  return temp == 'Script';
}


console.log(stringCheck('JavaScript'));
console.log(stringCheck('whatever'));
console.log(stringCheck('this'));