// Write a JavaScript function to find longest substring in a given a string without repeating characters.


function subs(str) {
  var longest = '';
  var count = 0;
  var newStr = str.split(' ').join('');

  for (var i = 0; i < newStr.length; i++) {
    var temp = newStr[i];
    var tempCount = 0;
    for (var j = i + 1; j < newStr.length; j++) {
      if (temp.includes(newStr[j])) {
        break;
      } else {
        temp += newStr[j];
        tempCount++;
      }
      if (tempCount > count) {
        count = tempCount;
        longest = temp;
      }
    }

  }

  return longest;
}


console.log(subs('this is a test'));
console.log(subs('where is the longest sequence in this sentence'));