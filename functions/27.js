// Write a JavaScript function to find longest substring in a given a string without repeating characters.


const palindromer = str => {
  var longest = '';
  var count = 0;
  var newStr = str.toLowerCase().split(' ').join('');

  for (var i = 0; i < newStr.length; i++) {
    var temp = newStr[i];
    var tempCount = 0;

    for (var j = newStr.length - 1; j > i; j--) {
      temp = newStr.slice(i, j);
      if (temp == temp.split('').reverse().join('')) {
        tempCount = temp.length;
        if (tempCount > count) {
          count = tempCount;
          longest = temp;
        }
      }
    }
  }
  return longest;
}



console.log(palindromer('bananas'));
