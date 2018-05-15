// Write a JavaScript program to rotate the elements left of a given array of integers of length 3.


function moveLeft(arr) {
  setInterval(function() {

    let first = arr.shift();
    arr.push(first);

    console.log(arr);
    
  }, 200);
}


let test = [1, 2, 3, 4, 5, 6];

moveLeft(test);