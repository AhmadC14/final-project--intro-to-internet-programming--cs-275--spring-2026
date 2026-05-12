const input = window.prompt("Enter a number");

const number = Number(input);

const output = document.getElementById('output');

let totalRows;

if (number % 2 === 0) {
    totalRows = number + 1;
}

else {
    totalRows = number;
}

for (let row = 1; row <= totalRows; row++) {

    let totalStars;

    if (number % 2 === 0) {

        if (row === 1 || row === totalRows) {
            totalStars = 1;
        }
        else if (row <= (number / 2) + 1) {
            totalStars = (row - 1) * 2;
        }

        else {
            totalStars = (totalRows - row) * 2;
        }

        const totalSpaces = number - totalStars;

        const spaces = ' '.repeat(totalSpaces);

        const stars = '* '.repeat(totalStars).trim();

        output.textContent += `${spaces}${stars}\n`;
    }

    else {

        if (row <= (number + 1) / 2) {
            totalStars = (row * 2) - 1;
        }

        else {
            totalStars = ((number - row + 1) * 2) - 1;
        }

        const totalSpaces = ((number + 1) - totalStars) / 2;

        const spaces = ' '.repeat(totalSpaces);

        const stars = '*'.repeat(totalStars);

    output.textContent += `${spaces}${stars}\n`;
    }
}