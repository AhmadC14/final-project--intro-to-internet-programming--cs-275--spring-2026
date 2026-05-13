import { completeMatrix } from "./matrix.js";

let size = parseInt(window.prompt(`Enter the size of your matrix:`));

console.log(`Your matrix is ${size} x ${size}`);
console.log(``);

console.log(`Printing matrix with default values:`);

completeMatrix(size);
