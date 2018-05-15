// Write a JavaScript program to check if a given string contains equal number of p's and t's present.


function pt(str) {
  let pcount = 0;
  let tcount = 0;
  let newStr = str.toLowerCase();

  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i] == 'p') {
      pcount++;
    } else if (newStr[i] == 't') {
      tcount++;
    }
  }
  if (pcount == tcount) {
    console.log('There are the same number of ps and ts');
  } else {
    console.log('Your ps and ts are different');
  }
}


pt('This is a test');
pt('TTPP');
pt('tttppp');
pt('Another that should return false');