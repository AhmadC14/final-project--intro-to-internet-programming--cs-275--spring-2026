let size = parseInt(window.prompt("Enter the size of your matrix:"));

console.log("Your matrix is " + size + " x " + size);
console.log("");

console.log("Printing matrix with default values:");

let total = size * size;
let number = 1;
let output = "";
let phase = 0;

for(let row = 0; row < total; row++){

    let column = row % size

    if(phase === 0){
        output += "0 ";

        if (column === size - 1) {
            console.log(output.trim());
            output = "";
        }

        if (row === total - 1) {
            phase = 1;
            console.log("");
            console.log("Populating matrix...matrix populated");
            console.log("");
            console.log("Printing matrix:");
        }
}
