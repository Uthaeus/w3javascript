// Write a JavaScript program to concatenate two strings except their first character.


function concatate(str1, str2) {
  let first = str1.slice(1);
  let second = str2.slice(1);

  console.log(first + ' ' + second);
}

concatate('this is a', 'test');
concatate('here is', 'another');