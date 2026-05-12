const diamond = { 
    generate(size) {
        if (!Number.isInteger(size) || size <= 0) {
            return '[ENTER A POSITIVE INTEGER] >>> ';
        }

        let result = '';
        const isOdd = size % 2 === 1;

        for (let row = 0; row < size; row++) {
            let line = '';

            if (isOdd) {
                const spaces = Math.abs(Math.floor(size / 2) - row);
                const stars = size - spaces * 2;
                line = ' '.repeat(spaces) + '*'.repeat(stars);
            } else {
                const mid = size / 2;
                let stars, spaces;
                if (row < mid) {
                    stars = (row + 1) * 2;
                    spaces = (size - stars) / 2;
                } else {
                    stars = (size - row) * 2;
                    spaces = (size - stars) / 2;
                }
                line = ' '.repeat(spaces) + '* '.repeat(stars / 2).trim();
            }
            result += line + '\n';
        }
        return result;
    },

    getUserInput() {
        let input = prompt('[ENTER IN A POSITIVE INTEGER] >>> ');
        if (input === null) return null;
        let num = parseInt(input, 10);
        if (isNaN(num) || num <= 0) {
            alert('[POSITIVE INTEGERS ONLY]');
            return this.getUserInput();
        }
        return num;
    }
};

const diamondButton = document.getElementById('generateDiamondButton');
const diamondOutput = document.getElementById('outputDiamond');

diamondButton.addEventListener('click', () => {
    const n = diamond.getUserInput();
    if (n !== null) {
        diamondOutput.textContent = diamond.generate(n);
    }
});