// Write a JavaScript program to calculate days left until next Christmas


const daysLeft = () => {
    let date = new Date(); 
    let year = date.getFullYear();
    let xmas = new Date(year, 11, 25);

    let left = (xmas - date) / (1000 * 60 * 60 * 24)
    console.log(Math.ceil(left));
}



daysLeft();