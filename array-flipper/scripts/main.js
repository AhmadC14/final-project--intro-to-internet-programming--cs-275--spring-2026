let arraySize;
let array = [];
let size = true;
const body = document.querySelector(`body`);

let getSize = () => {
    arraySize = window.prompt(`Please enter a positive integer greater than 1:`);
};

getSize();

while (size) {
    if (parseInt(arraySize) === 0 || parseInt(arraySize)) {
        arraySize = parseInt(arraySize);
        if (arraySize <= 1) {
            console.error(`Please enter a number greater than 1.`);
            getSize();
        }
        else {
            size = false;
        }
    }
    else {
        console.error(`You did not enter a numeric value, please try again.`);
        getSize();
    }
}

let printArray = size => {
    body.children[0].innerText += `Your matrix is ${size} x ${size}`;

    size = size * size;

    for (let i = 0; i < size; i++) {
        array[i] = 0;
    }

    body.children[1].innerText += `Printing matrix with default values:\n`;

    for (let index = 0; index < array.length; index++) {
        body.children[1].innerText += ` ${array[index]}`;

        // End of row
        if ((index + 1) % arraySize === 0) {
            body.children[1].innerText += "\n";
        }
    }
};

let populateArray = array => {
    body.children[2].innerText += `Populating matrix...matrix populated\n\n`;

    for (let i = 0; i < array.length; i++) {
        array[i] = i+1;
    }
    body.children[2].innerText += `Printing Matrix:\n`;

    for (let index = 0; index < array.length; index++) {
        body.children[2].innerText += ` ${array[index]}`;
        // End of row
        if ((index + 1) % arraySize === 0) {
            body.children[2].innerText += "\n";
        }
    }
};

let swap = (array, firstIndex, secondIndex) => {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

arrayFlipper = array => {
    body.children[3].innerText += `Flipping matrix...matrix flipped:\n\n`;

    for (let index = 0; index < array.length; index++) {
        let row = Math.floor(index / arraySize);
        let col = index % arraySize;
        let newRow = arraySize - 1 - col;
        let newCol = arraySize - 1 - row;
        let swapIndex = newRow * arraySize + newCol;

        // Prevent double swapping
        if (index < swapIndex) {
            swap(array, index, swapIndex);
        }
    }

    body.children[3].innerText += `Printing flipped matrix:\n`;

    for (let index = 0; index < array.length; index++) {
        body.children[3].innerText += ` ${array[index]}`;
        // End of row
        if ((index + 1) % arraySize === 0) {
            body.children[3].innerText += "\n";
        }
    }
};

printArray(arraySize);
populateArray(array);
arrayFlipper(array);
