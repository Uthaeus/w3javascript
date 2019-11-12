//  Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

const go = () => {
    let str = "w3resource";

    setInterval(() => {
        console.log(str);
        str = str[str.length - 1] + str.substr(0, str.length - 1);

    }, 500);
}

go();