// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Friday. 
// Current time is : 4 PM : 50 : 22

const output = function() {
  const d = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const hour = d.getHour();

  if (hour == 12) {
    var post = 'PM';
  } else if (hour > 12) {
    hour = hour - 12;
    var post = 'PM';
  } else {
    var post = 'AM';
  }

  const min = d.getMinute();
  const sec = d.getSecond();

  console.log(`Today is : ${days[d.getDay()]}`);
  console.log(`Current time is : ${hour} ${post} : ${min} : ${sec}`);
}