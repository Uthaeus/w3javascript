// Write a JavaScript function to find the first not repeated character.


const noRepeat = str => {
  var result = {};

  for (var i = 0; i < str.length; i++) {
    if (result[str[i]]) {
      result[str[i]]++;
    } else {
      result[str[i]] = 1;
    }
  }

  for (x in result) {
    if (result[x] == 1) {
      return x;
    }
  }
}



console.log(noRepeat('this is a test'));