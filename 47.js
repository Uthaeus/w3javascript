// Write a JavaScript program to check if a number in the range 40..10000 inclusive presents in two number (in same range).


function test_digit(x, y) 
  {
    let x_div = parseInt(x / 40);
    let x_mod = x % 40;
    let y_div = parseInt(y / 40);
    let y_mod = y % 40;
    return x_div === y_div || x_mod === y_mod ||
           x_div === y_mod || x_mod === y_div;
  }

console.log(test_digit(40, 4000));  
console.log(test_digit(80, 320));  
console.log(test_digit(89, 4000));