// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.


const longestWord = (str) => {
  var strArr = str.split(' ');

  var longest = '';
  var largest = 0;

  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].length > largest) {
      largest = strArr[i].length;
      longest = strArr[i];
    }
  }

  return longest;
}


console.log(longestWord('This is a test'));
console.log(longestWord('which of these words is the longest'));

