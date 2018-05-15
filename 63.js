// Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.



function mid(str) {
  let middle = str.slice((str.length / 2) - 1, (str.length / 2) + 2);
  console.log(middle);
  console.log(str.length / 2);
}

mid('this is a test');
mid('somelettershere');
