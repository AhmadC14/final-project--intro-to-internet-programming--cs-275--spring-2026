const output = document.getElementById(`output`);

const formatMatrix = (matrix, title) => {
    let str = `${title}:\n`;
    str += matrix.map(row => row.join(`\t`)).join(`\n`);
    return str + `\n\n`;
};

const initArrayFlipper = () => {
    const userInput = window.prompt(`Please enter the size of your matrix:`);
    const n = parseInt(userInput, 10);

    if (isNaN(n) || n <= 0 || n > 15) {
        const errorMsg = `Invalid input. Please refresh and enter a positive integer no larger than 15.`;
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

    for (let i = 0; i < totalElements; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        matrix[row][col] = i + 1;
    }

    resultLog += formatMatrix(matrix, `Printing matrix`);

    output.textContent = resultLog;
    console.log(resultLog);
};

initArrayFlipper();
