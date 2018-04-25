// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.


function rotate(str) {
  var strArr = str.split('');

  for (var i = 0; i < strArr.length; i++) {
    var traveller = strArr[0];
    strArr.slice(0, 1);
    strArr.push(traveller);
    console.log(strArr.join(''));
    
  }
}

function animate_string(id) {
  var element = document.getElementById(id);
  var textNode = element.childNodes[0]; // assuming no other children
  var text = textNode.data;

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 100);
}