// Write a JavaScript function to  get the number of occurrences of each letter in specified string.


const letterCounter = (str, c) => {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] == c) {
      count++;
    }
  }

  return count;
}


console.log(letterCounter('this is a test', 'i'));


const allLetters = (str) => {
  var result = {};

  for (var i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }

  return result;
}


console.log(allLetters('this is a test'));