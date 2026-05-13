export const diamondConstruct = {
    generate(diamondSize = 1) {
        if (!Number.isInteger(diamondSize) || diamondSize <= 0) {
            return `[ENTER A POSITIVE INTEGER] >>> `;
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
                const starSegment = Array(Math.max(0, stars)).fill(`*`).join(` `);
                line = `${starSegment}`;
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
                const starSegment = Array(Math.max(0, starsThisRow)).fill(`*`).join(` `);
                line = `${starSegment}`;
            }
            completeDiamond += `${line.trimStart()}\n`;
        }
        return completeDiamond;
    },
    getUserInput() {
        const userInput = window.prompt(`[ENTER IN A POSITIVE INTEGER] >>> `);
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
