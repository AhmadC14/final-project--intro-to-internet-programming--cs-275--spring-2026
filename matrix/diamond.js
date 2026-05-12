const size = Number(window.prompt('Enter a number of your choice:'));

const output = document.querySelector('#output');

const middle = Math.floor(size / 2);

for (let row = 0; row < size; row++) {

    const distance = Math.abs(middle - row);

    let spaces;
    let stars;
    let line = '';

    if (size % 2 !== 0) {
        spaces = distance;
        stars = size - (distance * 2);
        line =
            ' '.repeat(spaces) +
            '*'.repeat(stars);
    }

    else {
        spaces = distance + 1;
        stars = (size / 2) - distance;
        line =
            ' '.repeat(spaces) +
            '* '.repeat(stars);
    }

    output.textContent += line + '\n';
}
