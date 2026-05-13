let number;
let checkNumber = true;
let body = document.getElementById(`body`);

function getInput () {
    number = window.prompt(`Please enter a positive integer greater than 1:`);
}

getInput();

while (checkNumber) {
    if (parseInt(number)) {
        number = parseInt(number);
        if (number <= 1) {
            console.error(`Please enter a number greater than 1.`);
            getInput();
        }
        else {
            checkNumber = false;
        }
    }
    else {
        console.error(`You did not enter a numeric value, please try again.`);
        getInput();
    }
}

let totalRows;
if (number % 2 === 0){
    totalRows = number +1;
}
else{
    totalRows = number;
}

for (let row = 0, spaces = 0, stars = 0; row < totalRows; row++) {
    let tableRow = document.createElement(`tr`);

    //Even
    if (number % 2 === 0) {
        let middleRow = number/2;
        if (row <= middleRow) {
            if (row === 0){
                tableRow.classList.add(`top`);
                stars = row + 1;
            } else {
                stars = row * 2;
            }
        }
        else if (row === totalRows - 1){
            stars = totalRows - row;
            tableRow.classList.add(`bottom`);
        }
        else {
            stars = (totalRows - row - 1) * 2;
        }
        spaces = ((number-stars)/2);
    }
    //Odd
    else if (number % 2 === 1) {
        let middleRow = (number/2) - 0.5;
        if (row <= middleRow) {
            stars = row * 2 + 1;
        }
        else {
            stars = (totalRows - row - 1) * 2 + 1;
        }
        spaces = ((number-stars)/2) - 0.5;
    }
    for (let empty = 0; empty < spaces; empty++) {
        tableRow.innerHTML += `<td></td>`;
    }
    for (let fill = 0; fill < stars; fill++) {
        tableRow.innerHTML += `<td>*</td>`;
    }
    body.append(tableRow);
}
