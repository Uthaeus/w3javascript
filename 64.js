// Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string



function concatater(str1, str2) {
  if (str1.length > str2.length) {
    str1 = str1.slice(0, str2.length);
  } else if (str2.length > str1.length) {
    str2 = str2.slice(0, str1.length);
  }

  console.log(str1 + ' ' + str2);
}


concatater('This is a test', 'and this is another test');
concatater('Here is one', 'Here is a longer one');
