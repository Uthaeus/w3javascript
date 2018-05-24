// Write a JavaScript program to find all the possible options to replace the hash in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3.


function hasher(str) {
  var strArr = str.split('');
  var testArr = [];
  var resultArr = [];

  console.log(strArr);

  for (var i = 0; i < 10; i++) {
    var tempArr = strArr;
    var temp = [];
    for (var j = 0; j < tempArr.length; j++) {
      if (Number(tempArr[j])) {
        temp.push(+tempArr[j]);
      } else {
        temp.push(i);
      }
    }
    testArr.push(temp.join(''));
  }

  for (var k = 0; k < testArr.length; k++) {
    if (+testArr[k] % 3 == 0) {
      resultArr.push(testArr[k]);
    }
  }
  console.log(testArr);

  return resultArr;
}


console.log(hasher('2*1'));
