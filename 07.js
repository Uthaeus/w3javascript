// Write a JavaScript program to find 1st January is a Sunday between 2014 and 2050.

// Date syntax => Date(year, month, day, minutes, seconds, milliseconds)

function findSunday() {
  for (var year = 2014; year <= 2050; year++) {
    var d = new Date(year, 0, 1);
                // => Date(year, Jan, 1st)
    if (d.getDay() === 0) {
                // => Weekdays are 0 index based
                // => 0 = Sunday, 1 = Monday, etc
      console.log("1st of January is a Sunday " + year);
    }
  }
}

findSunday();