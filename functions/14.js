// Write a JavaScript function to convert an amount to coins


const coins = (amt, carr) => {
  var resultArr = [];

  var x = 0;

  while(x < carr.length) {
    if (amt > carr[x]) {
      resultArr.push(carr[x]);
      amt -= carr[x];
    } else {
      x++;
    }
  }

  return resultArr;
}


console.log(coins(46, [25, 10, 5, 2, 1]));