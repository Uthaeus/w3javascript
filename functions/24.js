// Write a JavaScript function to apply Bubble Sort algorithm.


function bubbleSort(arr) {
  var swapp;
  var n = arr.length - 1;
  var x = arr;

  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (x[i] < x[i + 1]) {
        var temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);

  return x;
}


console.log(bubbleSort([4, 3, 7, 5, 6, 7, 8, 2]));
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));


const bubble_sort = arr => {
  var swapp;
  var n = arr.length - 1;
  var x = arr;

  do {
    swapp = false;

    for (var i = 0; i < n; i++) {
      if (x[i] < x[i + 1]) {
        var temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    } 
    n--;
  } while (swapp);
  return x;
}


const bubblesort = arr => {
  var swapp;
  var n = arr.length - 1;
  var x = arr;

  do {
    swapp = false;

    for (var i = 0; i < n; i++) {
      if (x[i] < x[i + 1]) {
        var temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swapp = true;
      }
    }
    n--;
  } while (swapp);

  return x;
}


console.log(bubblesort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))
















