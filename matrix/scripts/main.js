const diamond = {

    generate(diamondSize) {
    if (!Number.isInteger(diamondSize) || diamondSize <= 0) {
        return '[ENTER A POSITIVE INTEGER] >>> ';
    }

    let completeDiamond = '';
    const isOdd = diamondSize % 2 === 1;

    const totalRows = isOdd ? diamondSize : diamondSize + 1;
    const midpoint = Math.floor(totalRows / 2);

    for (let row = 0; row < totalRows; row++) {
        let line = '';

        if (isOdd) {

            const distance = Math.abs(row - midpoint);
            const stars = diamondSize - distance * 2;
            const rowWidth = stars * 2 - 1;
            const maxWidth = diamondSize * 2 - 1;
            const leading = (maxWidth - rowWidth) / 2;
            const starSegment = stars === 1 ? '*' : Array(stars).fill('*').join(' ');
            line = ' '.repeat(leading) + starSegment;

        } else {

            let starsThisRow;
            if (row === 0 || row === totalRows - 1) {
                starsThisRow = 1;
            } else if (row <= midpoint) {
                starsThisRow = row * 2;
                if (starsThisRow > diamondSize) starsThisRow = diamondSize;
            } else {
                starsThisRow = (totalRows - 1 - row) * 2;
                if (starsThisRow > diamondSize) starsThisRow = diamondSize;
            }

            const starSegment = Array(starsThisRow).fill('*').join(' ');
            line = starSegment;
        }
        completeDiamond += line.trimStart() + '\n';
    }
    return completeDiamond;

    },

    getUserInput()
    {
        const userInput =
            prompt('[ENTER IN A POSITIVE INTEGER] >>> ');

        if (userInput === null) {
            return null;
        }

        const parsedIntegerInput =
            parseInt(userInput, 10);

        if (isNaN(parsedIntegerInput) || parsedIntegerInput <= 0) {

            alert('[POSITIVE INTEGERS ONLY]');

            return this.getUserInput();
        }

        return parsedIntegerInput;
    }
};

const generateDiamondButton =
    document.getElementById('generateDiamondButton');

const diamondOutputElement =
    document.getElementById('outputDiamond');

generateDiamondButton.addEventListener('click', () => {

    const userDiamondSize =
        diamond.getUserInput();

    if (userDiamondSize !== null) {

        diamondOutputElement.textContent =
            diamond.generate(userDiamondSize);
    }
});
