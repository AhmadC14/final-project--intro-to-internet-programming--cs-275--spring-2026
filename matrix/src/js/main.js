import buildDiamond from "./diamond.js";

const size = Number(window.prompt("Enter a number"));

const root = document.querySelector("#root");

root.appendChild(buildDiamond(size));
