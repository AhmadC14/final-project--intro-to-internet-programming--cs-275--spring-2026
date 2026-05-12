const size = Number(
    window.prompt('Please enter the size you want for your matrix:')
);
const output = document.querySelector('#output');
const matrix = [];
output.textContent += `Your matrix is ${size} × ${size}\n\n`;


for (let row = 0; row < size; row++) {
    matrix[row] = [];
    for (let col = 0; col < size; col++) {
        matrix[row][col] = 0;
    }
}

output.textContent += 'Printing your matrix with default values:\n';
for (let row = 0; row < size; row++) {
    output.textContent += matrix[row].join(' ') + '\n';
}


output.textContent += '\nPopulating your matrix...Thinking.. Done!\n\n';
let value = 1;
for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
        matrix[row][col] = value;
        value++;
    }
}


output.textContent += 'Printing your matrix:\n';
for (let row = 0; row < size; row++) {
    output.textContent += matrix[row].join('\t') + '\n';
}

output.textContent += '\nFlipping your matrix...Flipping all this still...matrix flipped!\n\n';
for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
        if (row + col === size - 1) {
            continue;
        }

        if (row + col < size - 1) {
            const temp = matrix[row][col];
            matrix[row][col] =
                matrix[size - 1 - col][size - 1 - row];
            matrix[size - 1 - col][size - 1 - row] = temp;
        }
    }
}

output.textContent += 'Printing flipped matrix:\n';
for (let row = 0; row < size; row++) {
    output.textContent += matrix[row].join('\t') + '\n';
}
