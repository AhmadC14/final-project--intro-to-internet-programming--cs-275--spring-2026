import { buildDiamond } from './diamond.js';

const input = window.prompt('Enter a number');
const n = parseInt(input, 10);

document.getElementById('output').textContent = buildDiamond(n);
