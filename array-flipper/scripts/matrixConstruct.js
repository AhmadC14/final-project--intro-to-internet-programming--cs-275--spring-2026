export const matrixConstruct = {
    generate(matrixSize = 1) {
        if (!Number.isInteger(matrixSize) || matrixSize <= 0) {
            return `[ ENTER A POSITIVE INTEGER ] >>> `;
        }
        const outputMessages = [];
        outputMessages.push(`PLEASE ENTER THE SIZE OF YOUR MATRIX: ${matrixSize}\n`);
        outputMessages.push(`YOUR MATRIX IS ${matrixSize} * ${matrixSize}\n`);

        const defaultMatrix = Array.from({ length: matrixSize }, () => Array(matrixSize).fill(0));
        outputMessages.push(`[ PRINTING MATRIX WITH DEFAULT VALUES ] >>> `);
        outputMessages.push(defaultMatrix.map(row => row.map(cell => cell.toString().padStart(3, ` `)).join(` `)).join(`\n`));
        outputMessages.push(`\n`);

        const populatedMatrix = Array.from({ length: matrixSize }, (_, r) =>
            Array.from({ length: matrixSize }, (_, c) => r * matrixSize + c + 1)
        );
        const flippedMatrix = Array.from({ length: matrixSize }, (_, r) => [...populatedMatrix[r]]);

        for (let i = 0; i < matrixSize * matrixSize; i++) {
            const row = Math.floor(i / matrixSize);
            const col = i % matrixSize;
            const isOnAntiDiagonal = row + col === matrixSize - 1;

            if (isOnAntiDiagonal) {
                flippedMatrix[row][col] = populatedMatrix[row][col];
            } else {
                const mirrorRow = matrixSize - 1 - col;
                const mirrorCol = matrixSize - 1 - row;

                if (row < mirrorRow || (row === mirrorRow && col < mirrorCol)) {
                    flippedMatrix[row][col] = populatedMatrix[mirrorRow][mirrorCol];
                    flippedMatrix[mirrorRow][mirrorCol] = populatedMatrix[row][col];
                } else {
                    flippedMatrix[row][col] = populatedMatrix[mirrorRow][mirrorCol];
                }
            }
        }

        outputMessages.push(`[ POPULATING MATRIX >>> MATRIX POPULATED ]\n`);
        outputMessages.push(`[ PRINTING MATRIX ] >>>`);
        outputMessages.push(populatedMatrix.map(row => row.map(cell => cell.toString().padStart(3, ` `)).join(` `)).join(`\n`));
        outputMessages.push(`\n`);
        outputMessages.push(`[ FLIPPING MATRIX >>> MATRIX FLIPPED ]\n`);
        outputMessages.push(`PRINTING FLIPPED MATRIX:`);
        outputMessages.push(flippedMatrix.map(row => row.map(cell => cell.toString().padStart(3, ` `)).join(` `)).join(`\n`));

        return outputMessages.join(`\n`);
    },
    getUserInput() {
        const userInput = window.prompt(`[ ENTER IN A POSITIVE INTEGER ] >>> `);
        if (userInput === null) {
            return null;
        }
        const parsedIntegerInput = parseInt(userInput, 10);
        if (isNaN(parsedIntegerInput) || parsedIntegerInput <= 0) {
            window.alert(`[POSITIVE INTEGERS ONLY]`);
            return this.getUserInput();
        }
        return parsedIntegerInput;
    }
};
