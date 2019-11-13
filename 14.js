// Write a JavaScript exercise to get the extension of a filename.



function filer(f) {
  var arr = f.split('.');
  var ext = arr[arr.length - 1];

  console.log(f);
  console.log(arr);
  console.log(ext);

  // console.log(f.split('.').pop())
}

var fileName = "abcd.jpeg";

filer(fileName);