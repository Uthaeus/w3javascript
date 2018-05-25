// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.


const longestCountry = arr => {
  
  var longest = '';
  var current = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > current) {
      current = arr[i].length;
      longest = arr[i];
    }
  }

  return longest;
}


console.log(longestCountry(["Australia", "Germany", "United States of America"]))

