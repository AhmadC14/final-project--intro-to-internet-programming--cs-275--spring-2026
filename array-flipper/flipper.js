const output = document.getElementById(`output`);

const formatMatrix = (matrix, title) => {
    let str = `${title}:\n`;
    str += matrix.map(row => row.join(`\t`)).join(`\n`);
    return str + `\n\n`;
};

const initArrayFlipper = () => {
    const userInput = window.prompt(`Please enter the size of your matrix:`);
    const n = parseInt(userInput, 10);

    if (isNaN(n) || n <= 0 || n > 8) {
        const errorMsg = `Invalid input. Please refresh and enter a positive integer no larger than 8.`;
        output.textContent = errorMsg;
        console.error(errorMsg);
        return;
    }

    let resultLog = `Please enter the size of your matrix: ${n}\n\n`;
    resultLog += `Your matrix is ${n} × ${n}\n\n`;

    const matrix = Array(n).fill().map(() => Array(n).fill(0));
    resultLog += formatMatrix(matrix, `Printing matrix with default values`);
    resultLog += `Populating matrix...matrix populated\n\n`;

    const totalElements = n * n;
    const totalIterations = totalElements * 2;

    for (let i = 0; i < totalIterations; i++) {
        const isPopulating = i < totalElements;

        const index = i % totalElements;
        const row = Math.floor(index / n);
        const col = index % n;

        if (isPopulating) {
            matrix[row][col] = index + 1;

            if (index === totalElements - 1) {
                resultLog += formatMatrix(matrix, `Printing matrix`);
                resultLog += `Flipping matrix...matrix flipped\n\n`;
            }
        } else {
            if (row + col < n - 1) {
                const targetRow = n - 1 - col;
                const targetCol = n - 1 - row;
                [matrix[row][col], matrix[targetRow][targetCol]] = [matrix[targetRow][targetCol], matrix[row][col]];
            }
        }
    }

    resultLog += formatMatrix(matrix, `Printing flipped matrix`);

    output.textContent = resultLog;
    console.log(resultLog);
};

initArrayFlipper();
