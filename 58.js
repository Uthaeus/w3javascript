// Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.


function copies(str) {
  if (str.length < 3) {
    console.log(str);
  } else {
    let temp = str.slice(str.length -3);
    for (var i = 0; i < 4; i++) {
      console.log(temp);
    }
  }
}


copies('this is a test');
copies('yo');
copies('whatever');