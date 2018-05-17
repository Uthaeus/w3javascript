// Write a JavaScript program to find the number of times to replace a given number with the sum of its digits until it convert to a single digit number.


function reducer(num) {
  
  let count = 0;

  const summer = function(n) {
    let arr = n.toString().split('');
    let numArr = [];

    for (var i = 0; i < arr.length; i++) {
      numArr.push(+arr[i]);
    }

    let temp = numArr.reduce(function(current, next) {
      return current += next;
    });

    return temp;
  }

  
  while (num > 10) {
    count++;
    num = summer(num);
  }

  

  console.log(count);
}


reducer(1234);
console.log('***********');
reducer(5555);

