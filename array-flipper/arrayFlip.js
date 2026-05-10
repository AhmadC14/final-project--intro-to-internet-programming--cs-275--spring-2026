let arrayButton = document.getElementById(`array-button`);
let arrayFlipButton = document.getElementById(`flip-button`);
let arrayDiv = document.getElementById(`array`);
let size, matrix;

let generateArray = () =>{
    let input = prompt(`Enter the size of the Array`);

    if(input === null) return;

    if (isNaN(input) || input.trim() === "" || input < 0) {
        alert("Please enter a valid number at least greater than 0.");
    }
    else{
        size = parseInt(input);
        matrix = Array.from({ length: size }, () => new Array(size).fill(0));
        console.log(matrix, size);
    }
}

arrayButton.addEventListener(`click`, generateArray);
