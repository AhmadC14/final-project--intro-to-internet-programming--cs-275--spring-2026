console.log("JS");

let userSize = parseInt(window.prompt("Enter a number: "));

for(let row = 0; row < userSize; row++){
    let stars = 0;
    let spaces = 0;

    if(Math.floor(userSize % 2 == 0)){
        if(row <= Math.floor(userSize / 2)){

            if(row == 0){
                stars = 1;
                spaces = Math.floor(userSize - 1);

            } else {
                stars = (row * 2);
                spaces = Math.floor(userSize  - row * 2);
            }
            // spaces = Math.floor(userSize / 2) - row;
            console.log(" ".repeat(spaces) + " *".repeat(stars));
        } else {
            stars = (userSize - row) * 2;
            // spaces = row - (Math.floor(userSize / 2));
            console.log(" *".repeat(stars));
        }

    } else {
        if(row <= Math.floor(userSize / 2)){
            stars = (row * 2) + 1;
            spaces = Math.floor(userSize / 2) - row;
            console.log(" ".repeat(spaces) + "*".repeat(stars));

        } else {
            stars = (userSize - row) * 2 - 1;
            spaces = row - (Math.floor(userSize / 2));
            console.log(" ".repeat(spaces) + "*".repeat(stars));
        }
    }
}
