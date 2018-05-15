// Write a JavaScript program to extract the first half of a string of even length.


function firstHalf(str) {
  let result = str.slice(0, str.length / 2);

  console.log(result);
  console.log(str.length / 2);
}


firstHalf('something');
firstHalf('another something');
firstHalf('a much longer string to see what happens');