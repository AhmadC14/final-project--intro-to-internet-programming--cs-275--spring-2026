const output = document.getElementById("output");

const getInput = () => {
  const value = Number(window.prompt("Enter number:"));
  return isNaN(value) ? 0 : value;
};

const generateDiamond = (num = 3) => {
  let result = "";
  const isEven = num % 2 === 0;
  const half = Math.floor(num / 2);

  for (let row = 0; row <= num; row++) {
    let spaces = "";
    let pluses = "";

    if(!isEven) {
      let distance = Math.abs(half - row);
      spaces = " ".repeat(distance);
      pluses = "+".repeat(num - 2 * distance);
    } else {
      if (0 === row || 1 === row) {
        spaces = " ".repeat(num - row);
        pluses = "+ ".repeat(row + 1).trim();
      }

      else if (row === num) {
        spaces = " ".repeat(num);
        pluses = "+ ";
      }

      else if (row < half) {
        let count = row * 2;
        spaces = " ".repeat(num - 2 * row + 1);
        pluses = "+ ".repeat(count).trim();
      }

      else if (row > half) {
        let bottomRow = num + 1 - row;
        spaces = " ".repeat(num - 2 * bottomRow + 3);
        pluses = "+ ".repeat(bottomRow * 2 - 2).trim();
      }

      else {
        spaces = " ";
        pluses = "+ ".repeat(num).trim();
      }
    }
    result += spaces + pluses + "\n";
  }
  return result;
};

let userInput = getInput();

output.textContent = 
  "Entered Number: " + userInput + "\n\n" +
  generateDiamond(userInput);
