let arrayButton = document.getElementById(`array-button`);
let arrayFlipButton = document.getElementById(`flip-button`);
let arrayDiv = document.getElementById(`array`);
let matrix;

let displayMatrix = (...grid) =>{
    let table = document.createElement(`table`);
    arrayDiv.innerHTML = ``;

    for (let row = 0; row < grid.length; ++row) {
        let tempRow = document.createElement(`tr`);
        tempRow.append(...generateCell(...grid[row]));
        table.appendChild(tempRow);
    }

    arrayDiv.append(table);
}

let generateCell = (...cells) =>{
    return cells.map(value => {let cell = document.createElement('th');
                                          cell.innerText = value;
                                          return cell;
    });
}

let generateArray = () =>{
    let input = prompt(`Enter the size of the Array`);

    if(input === null) return;

    if (isNaN(input) || input.trim() === "" || input < 0) {
        alert("Please enter a valid number at least greater than 0.");
    }
    else{
        let size = parseInt(input);
        let counter = 1;

        matrix = Array.from({ length: size }, () =>
            Array.from({ length: size }, () => counter++)
        );

        displayMatrix(...matrix);
    }
}

let flipMatrix = () => {
    if (arrayDiv.innerHTML === ``) generateArray();

    let size = matrix.length;
    let totalElements = size * size;
    let lastIndex = size - 1;

    for (let i = 0; i < Math.floor(totalElements / 2); i++) {
        let row = parseInt(i / size);
        let col = i % size;
        let swapRow = lastIndex - row;
        let swapCol = lastIndex - col;

        let onAnti1 = (row + col === lastIndex);
        let onAnti2 = (swapRow + swapCol === lastIndex);

        if (!onAnti1 && !onAnti2) {
            swap(row, col, swapRow, swapCol);
        }
    }

    displayMatrix(...matrix);
};

let swap = (row, col, swapRow, swapCol) => {
    let temp = matrix[row][col];
    matrix[row][col] = matrix[swapRow][swapCol];
    matrix[swapRow][swapCol] = temp;
};
arrayButton.addEventListener(`click`, generateArray);
arrayFlipButton.addEventListener(`click`, flipMatrix);
