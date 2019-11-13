//  Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19



const abs = num => {
    if (num > 19) {
        return (num - 19) * 3
    } else {
        return Math.abs(num - 19);
    }
}


console.log(abs(26));
console.log(abs(11));