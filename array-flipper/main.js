import { Matrix } from "./arrayflipper";

window.onload = () => {
    let input = Number(window.prompt("Enter size of matrix:"));

    console.log("Your input is " + input);

    if (input <= 0) {
        console.log("Size not acceptable");
        window.alert("Size not acceptable");
    } else {
        let matrix2 = new Matrix(input, input);

        matrix2
            .print("Blank Matrix")
            .populate()
            .print("Populated Matrix")
            .flip();
    }
};
