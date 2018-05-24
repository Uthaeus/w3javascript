// Write a JavaScript program to create the value of NOR of two given booleans.


function eval(x, y) {
  if (!x && !y) {
    return true;
  } else if (!x || !y) {
    return false;
  } else {
    return true;
  }
}



console.log(eval(true, false));
console.log(eval(true, true));
console.log(eval(false, true));
console.log(eval(false, false));