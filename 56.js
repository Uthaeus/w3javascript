// Write a JavaScript program to divide two positive numbers and return a string with properly formatted commas.


function divider(num1, num2) {
  let div = Math.round(num1 / num2).toString();
  let divArr = div.split('');
  let result = '';

  if (divArr.length > 3) {
    for (var i = divArr.length - 3; i > 0; i -= 3) {
      divArr.splice(i, 0, ',');
    }
    result = divArr.join('');
  } else {
    result = div;
  }
  console.log(result);
}


divider(1000, 1);
divider(10000000, 3);
divider(3000, 2);
divider(2500000, 4);
divider(40, 3);