// Write a JavaScript program to find the larger value between the first or last and set all the other elements with that value. Display the new array.


function larger(arr) {
  let larger = undefined;
  let first = arr[0];
  let last = arr[arr.length - 1];
  let resultArr = [];

  if (first > last) {
    larger = first;
  } else if (first < last) {
    larger = last;
  }

  for (var i = 0; i < arr.length; i++) {
    resultArr.push(larger);
  }
  console.log(resultArr);
}


larger([1, 2, 3, 4, 5]);
larger([9,  8, 8, 7, 6]);
