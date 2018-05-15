// Write a JavaScript program to convert the letters of a given string in alphabetical order.


function sorter(str) {
  let newStr = str.toLowerCase().split(' ').join('');
  let strArr = newStr.split('');
  let sorted = strArr.sort();


  console.log(sorted.join(''));
}


sorter('Some Gibberish here');