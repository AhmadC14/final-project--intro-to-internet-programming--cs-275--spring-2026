const output = document.getElementById("matrix-output");

const getInput = () => {
  const value = Number(window.prompt("Enter your matrix size:"));
  return isNaN(value) ? 0 : value;
};

const createMatrix = (size = 3) => {
  let matrix = [];

  for (let row = 0; row < size; row++) {
    matrix[row] = [];
    for (let col = 0; col < size; col++) {
      matrix[row][col] = 0;
    }
  }
  return matrix;
}

const renderMatrix = (matrix, size) => {
  const table = document.createElement("table");

  for (let row = 0; row < size; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < size; col++) {
      const td = document.createElement("td");
      td.textContent = matrix[row][col];

      if (col === size - row - 1) {
        td.classList.add("diagonal");
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  return table;
};

const populateMatrix = (matrix, size) => {
  let value = 1;
  for (let position = 0; position < size * size; position++) {
    let row = Math.floor(position / size);
    let col = position % size;
    matrix[row][col] = value++;
  }
  return matrix;
};

const flipMatrix = (matrix, size) => {
  for (let position = 0; position < size * size; position++) {
    let row = Math.floor(position / size);
    let col = position % size;
    if (col < size - row - 1) {
      let temp = matrix[row][col];

      matrix[row][col] =
        matrix[size - row - 1][size - col - 1];
      
      matrix[size - row - 1][size - col - 1] = temp;
    }
  }
  return matrix;
}

const userInput = getInput();
let matrix = createMatrix(userInput);

output.innerHTML = `
  <p>Please enter the size of your matrix: ${userInput}</p>
  <p>Your matrix is ${userInput} x ${userInput}</p>
  <p>Printing matrix with default values:</p>
  `;

output.appendChild(renderMatrix(matrix, userInput));

matrix = populateMatrix(matrix, userInput);

output.innerHTML += `
  <p>Populating matrix...matrix populated</p>
  <p>Printing matrix:</p>
  `;

output.appendChild(renderMatrix(matrix, userInput));

matrix = flipMatrix(matrix, userInput);

output.innerHTML += `
  <p>Flipping matrix...matrix flipped</p>
  <p>Printing flipped matrix:</p>
  `;

output.appendChild(renderMatrix(matrix, userInput));
