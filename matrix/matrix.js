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

        if (column === 0){
            console.log("0 ".repeat(size));
        }

        if (row === total - 1) {
            phase = 1;
            console.log("");
            console.log("Populating matrix...matrix populated");
            console.log("");
            console.log("Printing matrix:");
        }
}
