import { matrixConstruct } from './matrixConstruct.js';

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById(`matrixStartButton`);
    const outputElement = document.getElementById(`matrixOutput`);

    startButton.addEventListener(`click`, () => {
        const userMatrixSize = matrixConstruct.getUserInput();
        if (userMatrixSize !== null) {
            outputElement.textContent = matrixConstruct.generate(userMatrixSize);
        }
    });
});
