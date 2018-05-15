//  Write a JavaScript program to convert a given number to hours and minutes.


function toTime(num) {
  let hour = Math.floor(num / 60);
  let min = num % 60;

  if (min < 10) {
    min = `0${min}`;
  }

  let result = `${hour}:${min}`;

  console.log(result);
}


toTime(71);
toTime(450);
toTime(1441);