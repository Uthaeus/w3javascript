// Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.


function charShift(str) {
  if (str.length <= 1) {
    return str;
  } else {
    var first = str.slice(0, 1);
    var body = str.slice(1, -1);
    var last = str.slice(-1);

    return last + body + first;
  }
}


console.log(charShift("I"));
console.log(charShift("yippy"));
console.log(charShift("wonderful"));