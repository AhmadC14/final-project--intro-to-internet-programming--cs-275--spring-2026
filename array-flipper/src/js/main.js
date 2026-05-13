import {
    createMatrix,
    populate,
    flip,
    render
} from "./matrix.js";

const size = Number(
    window.prompt("Please enter the size of your matrix:")
);

const app = document.querySelector("#app");

const matrix = createMatrix(size);

render(matrix, app);

populate(matrix);

render(matrix, app);

flip(matrix);

render(matrix, app);
