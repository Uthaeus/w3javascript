// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string


const vowelCount = (str) => {
  var strArr = str.toLowerCase().split('');
  var vowels = 'aeiou';
  var count = 0;

  for (var i = 0; i < strArr.length; i++) {
    if (vowels.includes(strArr[i])) {
      count++;
    }
  }
  return count;
}



console.log(vowelCount('this is a test'));

console.log(vowelCount('Here is another test'));
console.log(vowelCount('Another, test. including, !extra; characters*'));
