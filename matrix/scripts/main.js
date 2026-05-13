import { diamondConstruct } from './diamondConstruct.js';

document.addEventListener('DOMContentLoaded', () => {
    const generateDiamondButton = document.getElementById(`generateDiamondButton`);
    const diamondOutputElement = document.getElementById(`outputDiamond`);

    generateDiamondButton.addEventListener(`click`, () => {
        const userDiamondSize = diamondConstruct.getUserInput();
        if (userDiamondSize !== null) {
            diamondOutputElement.textContent = diamondConstruct.generate(userDiamondSize);
        }
    });
});
