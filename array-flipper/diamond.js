let input = parseInt(window.prompt("Input the size of your desired diamond. "));
const output = document.getElementById(`output`);
let asterisk = 1;
let text = "";

export default function createDiamond() {
    if (input > 2 && input % 2 !== 0) { // Odd Diamonds, Doesn't Run if the diamond is smaller than 2
        for (let rows = 1; rows <= input/2 + 1; ++rows) {
            for (let spaces = 1; spaces <= input + 1 - rows; spaces++) {
                text += " ";
            }
            for (asterisk = 1; asterisk <= rows*2 - 1; asterisk++) {
                text += "*";
            }
            text += "\n";
        }
        // Decrementing, bottom half.
        for (let rows = input/2; 1 <= rows; --rows) {
            for (let spaces = 1; spaces <= input + 2 - rows; spaces++) {
                text += " ";
            }
            for (asterisk = 1; asterisk <= rows*2 - 2; asterisk++) {
                text += "*";
            }
            text += "\n";
        }
    }

    // Even Diamonds. Run as long as the diamond is bigger than 1
    if (input > 1 && input%2 === 0) {
        text += "\t * \n";
        for (let rows = 1; rows <= input/2; ++rows) {
            for (let spaces = 1; spaces <= input + 2 - rows; spaces++) {
                text += " ";
            }
            for (asterisk = 1; asterisk <= rows*2; asterisk++) {
                text += " *";
            }
            text += "\n";
        }

        // Decrementing, bottom half.
        for (let rows = input/2 - 1; 1 <= rows; --rows) {
            for (let spaces = 1; spaces <= input + 2 - rows; spaces++) {
                text += " ";
            }
            for (asterisk = 1; asterisk <= rows*2; asterisk++) {
                text += " *";
            }
            text += "\n";
        }
        text += "\t *";
    }
    output.textContent += text;
}
