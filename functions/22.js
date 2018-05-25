// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string


const howMany = (str, c) => {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] == c) {
      count++;
    }
  }
  return count;
}


console.log(howMany('this is a test', 'i'));