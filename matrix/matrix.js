let matrixSize = 9;
let numOfSpace = parseInt((matrixSize / 2) - 1);
let numOfStar = 3;
let topHalf = true
let matrix = document.createElement(`table`);
let tableHeader = document.createElement(`thead`);
let tableBody = document.createElement(`tbody`);
let tableFooter = document.createElement(`tfoot`);
let singleStar = document.createElement(`th`);
let firstRow = document.createElement(`tr`);
let body = document.querySelector(`body`);

singleStar.colSpan = matrixSize;
singleStar.innerText = `*`;
firstRow.append(singleStar.cloneNode(true));
tableHeader.appendChild(firstRow);
tableFooter.appendChild(firstRow.cloneNode(true));
matrix.appendChild(tableHeader);

for(let i = 1; i <= matrixSize - 2; ++i){
    let row = document.createElement(`tr`);
    let space = document.createElement(`th`);
    let star = document.createElement(`th`);

    star.innerText = `*`;
    space.innerText = ` `;

    space.colSpan = numOfSpace;

    if(numOfSpace > 0){
        row.appendChild(space);
    }
    // for(let x = 0; x < numOfStar; ++x){
    //     row.append(star.cloneNode(true));
    // }
    row.append(...Array.from({ length: numOfStar }, () => star.cloneNode(true)));
    tableBody.appendChild(row);
    console.log(`Row:${i} Number of space: ${numOfSpace} Stars: ${numOfStar}\n`);

    numOfSpace = (topHalf)? --numOfSpace : ++numOfSpace;
    numOfStar = (topHalf) ? numOfStar + 2 : numOfStar - 2;

    topHalf = (i >= parseInt((matrixSize - 2)/2)) ? false : true;
}
matrix.append(tableBody);
matrix.appendChild(tableFooter);
body.append(matrix);
