export const runFlipper = () => {
  const size = parseInt(window.prompt("Please enter the size of your matrix:"));

  console.log(`\nYour matrix is ${size} × ${size}\n`);

  const matrix = Array.from({ length: size }, () => Array(size).fill(0));

  console.log("Printing matrix with default values:");
  matrix.forEach(row => console.log(row.join(" ")));

  let value = 1;

  for (let i = 0; i < size * size; i++) {
    const row = Math.floor(i / size);
    const col = i % size;

    matrix[row][col] = value++;
  }

  console.log("\nPrinting matrix:");
  matrix.forEach(row => console.log(row.join("\t")));

  for (let i = 0; i < size * size; i++) {
    const r1 = Math.floor(i / size);
    const c1 = i % size;

    const r2 = size - 1 - c1;
    const c2 = size - 1 - r1;

    if (r1 + c1 < size - 1) {
      [matrix[r1][c1], matrix[r2][c2]] = [matrix[r2][c2], matrix[r1][c1]];
    }
  }

  console.log("\nPrinting flipped matrix:");
  matrix.forEach(row => console.log(row.join("\t")));
};
