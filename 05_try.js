var button = document.getElementById('demo-btn');
button.addEventListener('click', send);
var animate = document.getElementById('display-btn');
animate.addEventListener('click', test)

function send() {
  var input = document.getElementById('demo').value;
  var output = document.getElementById('out');
  output.innerHTML = input;
}

function test() {
  
  var element = document.getElementById('out');
  var textNode = element.childNodes[0];
  var text = textNode.data;

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    textNode.data = text;
  }, 200);
}