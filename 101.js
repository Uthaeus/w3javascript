// Write a JavaScript program to check whether a given string contains only Latin letters and no two uppercase and no two lowercase letters are in adjacent positions.


function stringCheck(str) {
  let notLatin = 0;
  let letterStreak = 1;
  let output = '';

  let newStr = str.replace(/\s/g, '');

  for (var i = 0; i < newStr.length; i++) {
    if (newStr.charCodeAt(i) < 65 || newStr.charCodeAt(i) > 90 && newStr.charCodeAt(i) < 97 || newStr.charCodeAt(i) > 122) {
      notLatin++;
      output += 'Your string contains non-latin characters\n';
    }
    if (newStr[i] == newStr[i + 1]) {
      letterStreak++;
      output += 'Your string contains repeating characters\n';
    }
  }

  if (notLatin > 0 || letterStreak > 1) {
    output += 'Not Valid\n'
    return  output;
  } else {
    return 'Valid String\n';
  }
}


let test = 'This is only a test';
let test2 = 'This is another TT test';
let test3 = 'TThis, is another. teeast';

console.log(stringCheck(test));
console.log(stringCheck(test2));
console.log(stringCheck(test3));