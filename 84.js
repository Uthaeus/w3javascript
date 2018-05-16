// Write a JavaScript to replace each character of a given string by the next one in the English alphabet


function change(str) {
  let result = '';
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) == 90) {
      result += 'A';
    } else if (str.charCodeAt(i) == 122) {
      result += 'a';
    } else if ((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 89) || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 121) {
      result += String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return result;
}


console.log(change('abcd efg hijk'));
console.log(change('yyy zzz'));
console.log(change('YYY ZZZ'));