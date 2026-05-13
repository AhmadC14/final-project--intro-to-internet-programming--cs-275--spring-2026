import { createMatrix, populateMatrix, flipMatrix, formatMatrix } from './matrix.js';

const buildOutput = (...sections) => sections.join('\n\n');

const input = window.prompt('Please enter the size of your matrix: ');
const n = parseInt(input, 10);

const colWidth = n * n >= 10 ? String(n * n).length + 2 : 2;

const matrix = createMatrix(n);
const zeroDisplay = formatMatrix(matrix);

populateMatrix(matrix);
const populatedDisplay = formatMatrix(matrix, colWidth);

flipMatrix(matrix);
const flippedDisplay = formatMatrix(matrix, colWidth);

document.getElementById('output').textContent = buildOutput(
    `Your matrix is ${n} × ${n}`,
    `Printing matrix with default values:\n${zeroDisplay}`,
    `Populating matrix...matrix populated`,
    `Printing matrix:\n${populatedDisplay}`,
    `Flipping matrix...matrix flipped`,
    `Printing flipped matrix:\n${flippedDisplay}`
);
