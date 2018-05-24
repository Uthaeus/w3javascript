// Write a JavaScript function that returns a passed string with letters in alphabetical order.


function sorter(str) {
  var result = [];
  var arr = str.split(' ');
  
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split('').sort().join('');
    result.push(temp);
  }
  return result.join(' ');
}


console.log(sorter('webmaster'));
console.log(sorter('this is a test'));