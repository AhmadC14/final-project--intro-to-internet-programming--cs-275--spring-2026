
export function diamond(input) {
    input = Number(input);

    if (input <= 0) {
        console.log("Size not acceptable");
        window.alert("Size not acceptable");
        return;
    }

    const rows = input + 1;
    const mid = Math.floor(rows / 2);

    const maxRow =
        input % 2 === 0
            ? Array(input).fill("*").join(" ")
            : Array(input).fill("*").join("");

    const maxWidth = maxRow.length;

    for (let i = 0; i < rows; i++) {
        let dist = Math.abs(mid - i);

        let stars = input - 2 * dist;

        if (stars < 1) {
            stars = 1;
        }

        let row =
            input % 2 === 0
                ? Array(stars).fill("*").join(" ")
                : Array(stars).fill("*").join("");

        // Centering
        let pad = Math.floor((maxWidth - row.length) / 2);

        console.log(" ".repeat(pad) + row);
    }
}
