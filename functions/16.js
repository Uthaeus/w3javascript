// Write a JavaScript function to extract unique characters from a string.

function remover(str, c) {
  var regex = new RegExp(c, 'g');

  str = str.replace(regex, '');

  return str;
}



console.log(remover('this is a test', 'i'));
console.log(remover('another test here', 't'));
