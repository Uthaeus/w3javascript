// Write a JavaScript program to calculate days left until next Christmas.



function daysLeft() {
  var now = new Date();
  var year = now.getFullYear();
  var xmas = new Date(year, 12, 25);

  var left = (xmas - now) / (1000 * 60 * 60 * 24);

  console.log(left);
}

daysLeft();