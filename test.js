// function rotate() {
//   let input = document.querySelector('#in').value;

//   setInterval(function() {
//     return input.push(input.shift())
//   }, 200);
// }


function rotate(s) {
  var result;

  setInterval(function() {
    var temp = s.slice(0, s.length - 1);
    var last = s[s.length - 1];
    var result = last + temp;

    
  }, 400);
  console.log(result);
}


console.log(rotate('something'));