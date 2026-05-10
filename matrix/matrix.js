let matrixSize,numOfSpace,numOfStar;
let body = document.getElementById(`diamond`);
let button = document.getElementById(`matrix-button`);

let generateMatrix = () =>{
    let topHalf = true;

    let matrix = document.createElement(`table`);
    let tableHeader = document.createElement(`thead`);
    let tableBody = document.createElement(`tbody`);
    let tableFooter = document.createElement(`tfoot`);
    let singleStar = document.createElement(`th`);
    let firstRow = document.createElement(`tr`);

    singleStar.colSpan = matrixSize;
    singleStar.innerText = `*`;
    firstRow.append(singleStar.cloneNode(true));

    tableHeader.appendChild(firstRow);
    tableFooter.appendChild(firstRow.cloneNode(true));
    matrix.appendChild(tableHeader);

    for(let row = 0; row < matrixSize - 2; ++row){
        let tempRow = document.createElement(`tr`);
        let space = document.createElement(`th`);
        let star = document.createElement(`th`);

        star.innerText = `*`;
        space.innerText = ` `;

        space.colSpan = numOfSpace;

        if(numOfSpace > 0){
            tempRow.appendChild(space);
        }

        tempRow.append(...Array.from({ length: numOfStar }, () => star.cloneNode(true)));
        tableBody.appendChild(tempRow);

        numOfSpace = (topHalf)? --numOfSpace : ++numOfSpace;
        numOfStar = (topHalf) ? numOfStar + 2 : numOfStar - 2;

        topHalf = (row  > parseInt((matrixSize - 2)/2)) ? false : true;
    }

    matrix.append(tableBody);
    matrix.appendChild(tableFooter);
    let existingTable = document.querySelector(`table`)

    if(existingTable){
        existingTable.remove();
    }

    body.append(matrix);
}

let updateMatrixElement = () => {
    let sizeInput = prompt(`Enter the size of a matrix`);

    if (sizeInput === null) return;

    if (isNaN(sizeInput) || sizeInput.trim() === "" || sizeInput <= 1) {
        alert("Please enter a valid number at least greater than 1.");
    } else {
        matrixSize = (sizeInput % 2 === 1) ? parseInt(sizeInput) : parseInt(sizeInput) + 1;
        numOfSpace = Math.floor((sizeInput / 2) - 1);
        numOfStar = (sizeInput % 2 === 1) ? 3: 2;
        generateMatrix();
    }
};

button.addEventListener(`click`, updateMatrixElement);
