// Write a JavaScript to find the longest string from an given array of strings.


function longest(arr) {
  var longestWord = '';
  var currentLongest = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > currentLongest) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}


console.log(longest(['word', 'wonder', 'summertime']));