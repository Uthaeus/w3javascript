// Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.


const comp = (b, n) => {
  return b ** n;
}


console.log(comp(2, 4));


function exp(b,n)
{
        var ans = 1;
        for (var i =1; i <= n; i++)
        {
                ans = b * ans;        
        }
        return ans;
}
console.log(exp(2, 4));