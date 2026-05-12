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

    let n = matrix.length;
    let totalElements = n * n;
    let lastIndex = n - 1;

    for (let i = 0; i < Math.floor(totalElements / 2); i++) {
        let r1 = Math.floor(i / n);
        let c1 = i % n;
        let r2 = lastIndex - r1;
        let c2 = lastIndex - c1;

        let onAnti1 = (r1 + c1 === lastIndex);
        let onAnti2 = (r2 + c2 === lastIndex);

        if (!onAnti1 && !onAnti2) {
            swap(r1, c1, r2, c2);
        }
    }

    displayMatrix(...matrix);
};

let swap = (r1, c1, r2, c2) => {
    let temp = matrix[r1][c1];
    matrix[r1][c1] = matrix[r2][c2];
    matrix[r2][c2] = temp;
};
arrayButton.addEventListener(`click`, generateArray);
arrayFlipButton.addEventListener(`click`, flipMatrix);
