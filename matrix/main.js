// I had to run my code using "npx http-server" due to the modules giving me an error in my browsers

import { completeMatrix } from "./matrix.js";

let size = parseInt(window.prompt(`Enter the size of your matrix:`));

console.log(`Your matrix is ${size} x ${size}`);
console.log(``);

console.log(`Printing matrix with default values:`);

completeMatrix(size);
