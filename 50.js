// Write a JavaScript program to capitalize the first letter of each word of a given string.


function capital(str) {
  var wordArr = str.split(' ');
  var resultArr = [];

  for (var i = 0; i < wordArr.length; i++) {
    var firstLetter = wordArr[i].slice(0, 1);
    var rest = wordArr[i].slice(1);
    var result = firstLetter.toUpperCase() + rest;
    resultArr.push(result);
  } 
  console.log(resultArr.join(' '));
}


capital('this is a test');
capital('a much longer string to try out here');