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

for (let row = 1; row <= totalRows; row++) /* The Single For-Loop Logic*/ {

    let stars = '';
    let spaces = '';
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

        let totalSpaces = number - totalStars;

        for (let column = 1; column <= totalSpaces; column++) {
            spaces += ' ';
        }

        for (let column = 1; column <= totalStars; column++) {
            stars += '* ';
        }

    }

    else {

        if (row <= (number + 1) / 2) {
            totalStars = (row * 2) - 1;
        }

        else {
            totalStars = ((number - row + 1) * 2) - 1;
        }

        let totalSpaces = ((number + 1) - totalStars) / 2;

        for (let column = 1; column <= totalSpaces; column++) /*Rendering Spaces*/ {
            spaces += ' ';
        }

        for (let column = 1; column <= totalStars; column++) /*Rendering Stars*/ {
            stars += '*';
        }

    }

    output.textContent += `${spaces}${stars}\n`;
}