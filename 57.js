// Write a JavaScript program to create a new string of specified copies (positive number) of a given string.


function copies(str, num) {
  for (var i = 0; i < num; i++) {
    console.log(str);
  }
}


copies('this is a test', 3);
copies('Happy Happy Joy Joy', 5);

function inline(str, num) {
  let result = '';

  for (var i = 0; i < num; i++) {
    result += str;
  }
  console.log(result);
}


inline('this is a test', 4);
inline('Happy Happy Joy Joy', 5);