const input = window.prompt("Enter a number");
const number = Number(input);
const output = document.getElementById('output');

if (number % 2 === 0) {
    for (let row = 1; row <= number + 1; row++) {
        let stars = '';
        let spaces = '';
        let totalStars;

        if (row === 1 || row === number + 1) {
            totalStars = 1;
        } else if (row <= (number / 2) + 1) {
            totalStars = (row - 1) * 2;
        } else {
            totalStars = (number + 1 - row) * 2;
        }

        let totalSpaces = number - totalStars;

        for (let column = 1; column <= totalSpaces; column++) {
            spaces += ' ';
        }

        for (let column = 1; column <= totalStars; column++) {
            stars += '* ';
        }

        output.textContent += `${spaces}${stars}\n`;
    }
}

else {
    for (let row = 1; row <= number; row++) {
        let stars = '';
        let spaces = '';
        let totalStars;
        
        if (row <= (number + 1) / 2) {
        totalStars = row * 2 - 1;
        }
        
        else {
        totalStars = (number - row + 1) * 2 - 1;
        }

        let totalSpaces = ((number + 1) - totalStars) / 2;
        for (let column = 1; column <= totalSpaces; column++) {
        spaces += ' ';
        }

        for (let column = 1; column <= totalStars; column++) {
        stars += '*';
        }
        
        output.textContent += `${spaces}${stars}\n`;
    }
}
