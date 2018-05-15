// Write a JavaScript program to count the number of vowels in a given string.


function vowelCount(str) {
  let str2 = str.toLowerCase();
  let vowels = 'aeiou';
  let count = 0;

  for (var i = 0; i < str2.length; i++) {
    if (vowels.includes(str2[i])) {
      count++;
    }
  }
  console.log(count);
}


vowelCount('This is a test');
vowelCount('Here is another one to try');