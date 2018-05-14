// Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character. 


function times(str, char) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] == char) {
      count++;
    }
  }
  return (count >= 2 && count <= 4);
}


console.log(times('this is a test', 's'));
console.log(times('this is a test', 'a'));

// var a = "acvbasbb";
// var b= {};
// for (let i=0;i<a.length;i++){
//     if((a.match(new RegExp(a[i], "g"))).length > 1){
//         b[a[i]]=(a.match(new RegExp(a[i], "g"))).length;
//     }
// }