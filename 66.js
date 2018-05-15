// Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.


function city(str) {
  let result = '';
  let pre = str.slice(0, 3);

  if (pre == 'Los' || pre == 'New') {
    result += str;
  }

  return result;
}

console.log(city('New Mexico'));
console.log(city('New York'));
console.log(city('Los Angelas'));
console.log(city('Salt Lake'));