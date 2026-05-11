const output = document.getElementById("output");

const getInput = () => {
  const value = Number(window.prompt("Enter number:"));
  return isNaN(value) ? 0 : value;
};

const generateDiamond = (num = 3) => {
  let result = "";
  const isEven = num % 2 === 0;
  const half = Math.floor(num / 2);

  for (let row = 0; row < num; row++) {
    let spaces = "";
    let pluses = "";

    if(!isEven) {
      let distance = Math.abs(half - row);
      spaces = " ".repeat(distance);
      pluses = "+".repeat(num - 2 * distance);
    } else {
      //insert code here for even case
    }
    result += spaces + pluses + "\n";
  }
  return result;
};

let userInput = getInput();

output.textContent = 
  "Entered Number: " + userInput + "\n\n" +
  generateDiamond(userInput);
