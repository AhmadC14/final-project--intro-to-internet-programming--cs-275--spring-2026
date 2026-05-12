let size = parseInt(window.prompt("Enter the size of your matrix:"));

console.log("Your matrix is " + size + " x " + size);
console.log("");

console.log("Printing matrix with default values:");

let total = size * size;
let number = 1;
let output = "";
// let phase = 0;
let matrix = [];

for(let row = 0; row < total * 3; row++){

    let current = row % total;
    let column = current % size
    let currentRow = Math.floor(current / size);

    //let index = row % total;

    let phase = Math.floor(row / total);

    if(phase === 0){

        if (column === 0){
            console.log("0 ".repeat(size));
        }

        if (row === total - 1) {
            console.log("");
            console.log("Populating matrix...matrix populated");
            console.log("");
            console.log("Printing matrix:");
        }
    }

    if (phase === 1) {


        if(column === 0){
            output = "";
        }

        output += number++ + "   ";

        if (column === size - 1) {
            console.log(output.trim());
        }

        if (current === total - 1) {
            console.log("");
            console.log("Flipping matrix...matrix flipped");
            console.log("");
            console.log("Printing flipped matrix:");
        }
}
