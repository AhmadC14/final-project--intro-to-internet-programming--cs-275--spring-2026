/* eslint-disable */
let arrayTable = document.getElementById("array");
let flippedTable = document.getElementById("flipped-array");

window.onload = () => {
    let userInput = window.prompt("Enter the array size: ");
    let startMatrix = [userInput, userInput];
    window.alert("Printing pre-filled array");
    arrayFill = 1;
    for(let row = 0; row < userInput; row++){
        tableRow = arrayTable.insertRow(row);
        for(let col = 0; col < userInput; col++){
            tableCol = tableRow.insertCell(col);
            tableCol.innerHTML = arrayFill;
            arrayFill++;
        }
    }

    let holdDiag = 1;
    let flippedFiller = userInput*userInput;
    let diagFixer = userInput-1;

    setTimeout(() =>{
        window.alert("Printing flipped array");
        for(let row = 0; row < userInput; row++){
            flippedRow = flippedTable.insertRow(row);
            for(let col = 0; col < userInput; col++){
                flippedCol = flippedRow.insertCell(col);
                if (col === diagFixer) {
                    flippedCol.innerHTML = holdDiag;
                    diagFixer--;
                }else if (col !== diagFixer) {
                    flippedCol.innerHTML = flippedFiller;
                }
                flippedFiller--;
                holdDiag++;
            }
        }
    }, 2000);
}
