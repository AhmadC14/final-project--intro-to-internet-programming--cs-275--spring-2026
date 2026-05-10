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

arrayButton.addEventListener(`click`, generateArray);
