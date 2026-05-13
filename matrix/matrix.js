// I had to run my code using "npx http-server" due to the modules giving me an error in my browsers

export function completeMatrix(size){
    let total = size * size;
    let number = 1;
    let output = ``;
    let matrix = [];

    for(let row = 0; row < total * 3; row++){

        let current = row % total;
        let column = current % size;

        let phase = Math.floor(row / total);

        if(phase === 0){

            if (column === 0){
                console.log(`0 `.repeat(size));
            }

            if (row === total - 1) {
                console.log(``);
                console.log(`Populating matrix...matrix populated`);
                console.log(``);
                console.log(`Printing matrix:`);
            }
        }

        if (phase === 1) {

            if(column === 0){
                output = ``;
            }

            output += number + `  `;

            matrix[current] = number;
            number++;

            if (column === size - 1) {
                console.log(output.trim());
            }

            if (current === total - 1) {
                console.log(``);
                console.log(`Flipping matrix...matrix flipped`);
                console.log(``);
                console.log(`Printing flipped matrix:`);
            }

        } else if (phase === 2) {
            let currentIndex = row % total;
            let currentRow = Math.floor(currentIndex / size);
            let column = currentIndex % size;

            if (matrix[currentIndex] === undefined) {
                matrix[currentIndex] = currentIndex + 1;
            }

            let firstIndex = currentRow * size + column;
            let secondIndex = (size - 1 - column) * size + (size - 1 - currentRow);

            if (currentRow + column !== size - 1) {
                if (firstIndex < secondIndex) {
                    let temp = matrix[firstIndex];
                    matrix[firstIndex] = matrix[secondIndex];
                    matrix[secondIndex] = temp;
                }
            }

            if (column === size - 1) {
                let output = ``;
                output = matrix.slice(currentRow * size, currentRow * size + size).join(`  `);

                console.log(output.trim());
            }
        }
    }
}
