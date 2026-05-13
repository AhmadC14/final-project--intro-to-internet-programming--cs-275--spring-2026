/* eslint-disable @stylistic/padded-blocks */
/* eslint-disable @stylistic/space-before-blocks */
/* eslint-disable @stylistic/no-trailing-spaces */
/* eslint-disable @stylistic/space-in-parens */
/* eslint-disable @stylistic/indent */
/* eslint-disable no-alert */
/* eslint-disable @stylistic/quotes */
/* eslint-disable no-undef */

let userInput = 0;
let table = document.getElementById("print-table");

window.onload = () => {
    userInput = window.prompt("Enter the matrix number: ");
    let slicer = ((userInput / 2) - (userInput % 2));
    let inserter = "Ω";
    window.alert(slicer);

    if ( userInput % 2 !== 0){
            for (let loop = 0; loop < userInput; loop++) {
            row = table.insertRow(loop);
            cell = row.insertCell(0);
            cell.innerHTML = (inserter + "<br>");
            if (loop <= slicer){
                inserter += "ΩΩ";
            } else if (loop > slicer){
                inserter = inserter.slice(0, inserter.length - 2);
            }
    }
    }

    if (userInput % 2 === 0) {
        for (let loop = 0; loop <= userInput; loop++) {
            row = table.insertRow(loop);
            cell = row.insertCell(0);
            cell.innerHTML = (inserter + "<br>");

            if (loop === userInput){
                inserter = inserter.slice(0, inserter.length);
            }

            if (loop < slicer){
                if (loop > 0){
                inserter += "ΩΩ";
            } else {
                inserter += "Ω";
            }
            } else if (loop >= slicer){
                if (loop < userInput){
                    inserter = inserter.slice(0, inserter.length - 2);
                } else {
                    inserter = inserter.slice(0, inserter.length - 1);
                }
            }
    }
    row = table.insertRow(userInput);
    cell = row.insertCell(0);
    cell.innerHTML = ("Ω" + "<br>");
    }
};
