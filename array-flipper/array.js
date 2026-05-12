console.log("JS");

let userSize = parseInt(window.prompt("Enter a number: "));

for(let row = 0; row < userSize; row++){
    let stars = 0;
    let spaces = 0;

    if(Math.floor(userSize % 2 == 0)){

    } else {
        if(row <= Math.floor(userSize / 2)){
            stars = (row * 2) + 1;
            console.log("*".repeat(stars));
        } else {
            stars = (userSize - row) * 2 - 1;
            spaces = (userSize + 1) / 2 - row;
            console.log("*".repeat(stars));
        }
    }

}
