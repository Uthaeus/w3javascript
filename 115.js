// Write a JavaScript program to check whether a matrix is a diagonal matrix or not. In linear algebra, a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero (the diagonal from the upper left to the lower right).


function diagonal(aoa) {
  var l = aoa.length - 1;
  var result = true;

  //console.log(aoa);
  // console.log(aoa[0][0]);
  // console.log(l);


  for (var i = 0; i < aoa.length - 1; i ++) {
    for (var j = 0; j < aoa[i].length - 1; j++) {
      if (aoa[i + 1][j + 1] > aoa[i][j] + 1 || aoa[i + 1][j +1] < aoa[i][j] - 1) {

        return false;
      } 
    }
  }
  return true;
}


console.log(diagonal([[1, 0, 0], [0, 2, 0], [0, 0, 3]]));
console.log(diagonal([[1, 0, 0], [0, 2, 3], [0, 0, 3]]));


function is_diagonal_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0) 
              return false;
        }
    }
    return true;
}


console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 0], [0, 0, 3] ]));
console.log(is_diagonal_matrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));