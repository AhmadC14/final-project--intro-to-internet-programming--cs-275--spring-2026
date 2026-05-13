const input = parseInt(window.prompt("Input the size of your desired matrix. "));
let matrix = Array(input).fill(0).map(() => Array(input).fill(0));

export default function buildMatrix() {
    const defaultMatrix = Array(input).fill(0).map(() => Array(input).fill(0));

    console.log(`Your matrix is ${input} x ${input}.`);
    console.log("Printing matrix with default values: ");
    console.log(defaultMatrix);
}

export function populateMatrix() {
    let value = 1;

    console.log("Populating matrix... ");
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            matrix[row][col] = value++;
        }
    }
    console.log("Matrix populated! ");
    console.log(matrix);
}

export function flipper() {

}
