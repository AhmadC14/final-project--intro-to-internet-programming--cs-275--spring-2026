const createMatrix = (n) => Array.from({ length: n }, () => new Array(n).fill(0));

const populateMatrix = (matrix) => {
    const n = matrix.length;

    for (let k = 0; k < n * n; k++) {
        matrix[Math.floor(k / n)][k % n] = k + 1;
    }
};

const flipMatrix = (matrix) => {
    const n = matrix.length;

    for (let k = 0; k < n * n; k++) {
        const i = Math.floor(k / n);
        const j = k % n;

        if (i + j < n - 1) {
            [matrix[i][j], matrix[n - 1 - i][n - 1 - j]] = [matrix[n - 1 - i][n - 1 - j], matrix[i][j]];
        }
    }
};

const formatMatrix = (matrix, colWidth = 2) =>
    matrix.map(row =>
        row.map(val => String(val).padEnd(colWidth)).join('').trimEnd()
    ).join('\n');

export { createMatrix, populateMatrix, flipMatrix, formatMatrix };
