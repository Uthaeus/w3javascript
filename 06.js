// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

function leapYear() {
  var d = new Date();
  var year = d.getFullYear();
  // var year = prompt("Enter a year(yyyy): ");
  var yes = "This is a leap year.";
  var no = "This is not a leap year."

  if (year % 400 == 0) {
    return yes;
  } else if (year % 4 == 0 && year % 100 != 0) {
    return yes;
  } else {
    return no;
  }
}

console.log(leapYear());
