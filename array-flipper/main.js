// I had to run my code using "npx http-server" due to the modules giving me an error in my browsers

import { completeDiamond } from "./array.js";

let userSize = parseInt(window.prompt(`Enter a number:`));

completeDiamond(userSize);
