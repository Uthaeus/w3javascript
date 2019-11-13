// Write a JavaScript program to find the types of a given angle.


const angle = a => {
    if (a < 90 && a > 0) {
        return 'acute';
    } else if (a == 90) {
        return 'right';
    } else if (a > 90 && a < 180) {
        return 'obtuse';
    } else if (a == 180) {
        return 'straight';
    }
    return 'Not recognizable';
}


console.log(angle(20));
console.log(angle(90));
console.log(angle(180));
console.log(angle(-20));
console.log(angle(200));