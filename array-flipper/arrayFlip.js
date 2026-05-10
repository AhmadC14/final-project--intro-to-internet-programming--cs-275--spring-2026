let arrayButton = document.getElementById(`array-button`);
let arrayFlipButton = document.getElementById(`flip-button`);
let arrayDiv = document.getElementById(`array`);
let matrix;

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

        console.log(matrix);
    }
}

arrayButton.addEventListener(`click`, generateArray);
