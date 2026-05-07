let matrixSize = 3;
let matrix = document.createElement(`table`);
let tableHeader = document.createElement(`thead`);
let tableFooter = document.createElement(`tfoot`);
let singleStar = document.createElement(`th`);
let firstRow = document.createElement(`tr`);
let body = document.querySelector(`body`);

singleStar.colSpan = matrixSize;
singleStar.innerText = `*`;
firstRow.append(singleStar);
tableHeader.appendChild(firstRow);
tableFooter.appendChild(firstRow.cloneNode(true));
matrix.appendChild(tableHeader);

matrix.appendChild(tableFooter);
body.append(matrix);
