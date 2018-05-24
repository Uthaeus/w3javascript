// Write a JavaScript function that checks whether a passed string is palindrome or not?



const palindrome = (str) => {
  var temp = str.split('').reverse().join('').toLowerCase();
  
  return temp == str.toLowerCase();
}


console.log(palindrome('racecar'));
console.log(palindrome('Racecar'));
console.log(palindrome('test'));
