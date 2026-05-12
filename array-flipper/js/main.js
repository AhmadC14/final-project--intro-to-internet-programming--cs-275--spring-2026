const input = window.prompt('Please enter the size of your matrix:');

const size = Number(input);

const output = document.getElementById('output');

output.textContent += `The size of your matrix is ${size} x ${size}\n`;

output.textContent += 'Here is your matrix:\n';

const matrix = [];

for (let index = 0; index < size * size; index++) {
    const row = Math.floor(index / size);
    const column = index % size;

    if (!matrix[row]) {
        matrix[row] = [];
    }

    matrix[row][column] = 0;

    output.textContent += `${matrix[row][column]} `;

    if (column === size - 1) {
        output.textContent += '\n';
    }
}

output.textContent += 'Here is your matrix populated:\n';

output.textContent += 'Printing matrix:\n';

for (let index = 0; index < size * size; index++) {
    const row = Math.floor(index / size);
    const column = index % size;

    matrix[row][column] = index + 1;

    output.textContent += `${matrix[row][column]} `;

    if (column === size - 1) {
        output.textContent += '\n';
    }
}

output.textContent += 'Flipping Matrix... matrix flipped:\n';

output.textContent += 'Printing flipped matrix:\n';

for (let index = 0; index < size * size; index++) {
    const row = Math.floor(index / size);
    const column = index % size;

    if (row + column < size - 1) {
        const temp = matrix[row][column];

    matrix[row][column] = matrix[size - 1 - row][size - 1 - column];

    matrix[size - 1 - row][size - 1 - column] = temp;
    }
}

for (let index = 0; index < size * size; index++) {
    const row = Math.floor(index / size);
    const column = index % size;

    output.textContent += `${matrix[row][column]} `;

    if (column === size - 1) {
        output.textContent += '\n';
    }
}