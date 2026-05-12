console.log("JS");

let userSize = parseInt(window.prompt("Enter a number: "));

let middle = Math.floor(userSize / 2);

for(let row = 0; row < userSize; row++){
    let stars = 0;
    let spaces = 0;

    if(userSize % 2 == 0){
        if(row <= middle){

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
                spaces = (middle - row );
        }

    } else {
        if(row <= middle){
            stars = (row * 2) + 1;
            spaces = middle - row;
            console.log(" ".repeat(spaces) + "*".repeat(stars));

        } else {
            stars = (userSize - row) * 2 - 1;
            spaces = row - middle;
            console.log(" ".repeat(spaces) + "*".repeat(stars));
        }
    }
}
