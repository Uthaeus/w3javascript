// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7


const getArea = () => {
    let a = 5, b = 6, c = 7;
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}


console.log(getArea());