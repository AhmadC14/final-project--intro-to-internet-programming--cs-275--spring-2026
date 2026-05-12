const outputElement = document.getElementById(`output`);

const buildMatrixString = (matrixData, sectionTitle) => {
    let formattedText = `${sectionTitle}:\n`;
    formattedText += matrixData.map(row => row.join(`\t`)).join(`\n`);
    return formattedText + `\n\n`;
};

// Get user input
const runArrayFlipper = () => {
    const userInput = window.prompt(`Please enter the size of your matrix:`);
    const matrixSize = parseInt(userInput, 10);

    // Validate user input
    if (isNaN(matrixSize) || matrixSize <= 0 || matrixSize > 8) {
        const errorMessage = `Invalid input. Please refresh and enter a positive integer no larger than 8.`;
        outputElement.textContent = errorMessage;
        console.error(errorMessage);
        return;
    }

    let displayedOutput = `Please enter the size of your matrix: ${matrixSize}\n\n`;
    displayedOutput += `Your matrix is ${matrixSize} × ${matrixSize}\n\n`;

    const matrix = Array(matrixSize)
        .fill()
        .map(() => Array(matrixSize).fill(0));

    displayedOutput += buildMatrixString(matrix, `Printing matrix with default values`);
    displayedOutput += `Populating matrix...matrix populated\n\n`;

    const totalCells = matrixSize * matrixSize;
    let phase = `fill`;

    // Print empty 0's for matrix
    for (let step = 0; step < totalCells * 2; step++) {
        const index = step % totalCells;
        const row = Math.floor(index / matrixSize);
        const col = index % matrixSize;

        // Fill matrix
        if (phase === `fill`) {
            matrix[row][col] = index + 1;

            if (index === totalCells - 1) {
                displayedOutput += buildMatrixString(matrix, `Printing matrix`);
                displayedOutput += `Flipping matrix...matrix flipped\n\n`;
                phase = `flip`;
            }
        }
        // Flip matrix
        else {
            const shouldSwap = row + col < matrixSize - 1;

            if (shouldSwap) {
                const targetRow = matrixSize - row - 1;
                const targetCol = matrixSize - col - 1;

                const temp = matrix[row][col];
                matrix[row][col] = matrix[targetRow][targetCol];
                matrix[targetRow][targetCol] = temp;
            }
        }
    }

    // Print matrices
    displayedOutput += buildMatrixString(matrix, `Printing flipped matrix`);

    outputElement.textContent = displayedOutput;
    console.log(displayedOutput);
};

export { runArrayFlipper };
