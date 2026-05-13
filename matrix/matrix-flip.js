const input = parseInt(window.prompt("Input the size of your desired matrix. "));
const output = document.getElementById(`output`);
const size = input * input;
let matrix = Array(input).fill(0).map(() => Array(input).fill(0));

export default function buildMatrix() {
    const defaultMatrix = Array(input).fill(0).map(() => Array(input).fill(0));

    output.textContent += `Your matrix is ${input} x ${input}. \n`;
    output.textContent += "Printing matrix with default values: \n \n";
    output.textContent += `${defaultMatrix} \n \n`;
}

export function populateMatrix() {
    let populatedMatrix = Array(input).fill(0).map(() => Array(input).fill(0));
    let value = 1;

    output.textContent += "Populating matrix... \n";
    for (let row = 0; row < populatedMatrix.length; row++) {
        for (let col = 0; col < populatedMatrix.length; col++) {
            populatedMatrix[row][col] = value++;
        }
    }
    output.textContent += "Matrix populated! \n \n";
    output.textContent += `${populatedMatrix} \n \n`;
}

export function swapFunction() {
    let flippedMatrix = matrix;
    let value = 1;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            matrix[row][col] = value++;
        }
    }

    console.log("Flipping matrix... ");
    for(let z = 0; z < size; z++) {
        let row = Math.floor(z / input);
        let col = z % input;

        if(row + col < input - 1) {
            [matrix[row][col], matrix[input - 1 - row][input - 1 - col]] = [matrix[input - 1 - row][input - 1 - col], matrix[row][col]];
        }
    }
    output.textContent += "Matrix flipped! \n \n";
    output.textContent += `${flippedMatrix}`;
}
