// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.


const seconds = arr => {

  var resultArr = [];
  var sorted = arr.sort(function(a, b) {
    return a - b;
  });

  resultArr.push(sorted[1], sorted[sorted.length - 2]);

  return resultArr;
}



console.log(seconds([3, 4, 2, 5, 6, 1, 8]));