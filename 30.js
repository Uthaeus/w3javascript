// Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one. 


function strCheck(str) {
  var temp = str.slice(4, 10);

  console.log(temp);

  if (temp == 'Script') {
    return str.slice(0, 4) + str.slice(10);
  } else {
    return str;
  }

}

console.log(strCheck('test'));
console.log(strCheck('JavaScript is super awesome'));
console.log(strCheck('Longer string here for test'));