// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.



function nextChar(str) {
  var newStr = '';

  for (var i = 0; i < str.length; i++) {
    if (122 == str.charCodeAt(i)) {
      newStr += 'a';
    } else if (90 == str.charCodeAt(i)) {
      newStr += 'A';
    } else if ((65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 89) || 
              (97 <= str.charCodeAt(i) && str.charCodeAt(i) <= 121)) {
      newStr += String.fromCharCode(str.charCodeAt(i) + 1);
    } else {
      newStr += str.charAt(i);
    }
  }
  return newStr;
}


console.log(nextChar('This is a test'));

console.log(nextChar('Here is Another Example To Test'));