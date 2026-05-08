let matrixSize = 9;
let numOfSpace = parseInt((matrixSize / 2) - 1);
let numOfStar = 3;
let topHalf = true
let matrix = document.createElement(`table`);
let tableHeader = document.createElement(`thead`);
let tableFooter = document.createElement(`tfoot`);
let star = document.createElement(`th`);
let space = document.createElement(`th`);
let firstRow = document.createElement(`tr`);
let body = document.querySelector(`body`);

star.colSpan = matrixSize;
star.innerText = `*`;
space.innerText = ` `;
firstRow.append(star.cloneNode(true));
tableHeader.appendChild(firstRow);
tableFooter.appendChild(firstRow.cloneNode(true));
matrix.appendChild(tableHeader);

matrix.appendChild(tableFooter);
body.append(matrix);
