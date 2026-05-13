const output = document.getElementById(`output`);

const drawDiamond = () => {
    const userInput = window.prompt(`Enter a number between 1 and 15:`);
    const n = parseInt(userInput, 10);

    if (isNaN(n) || n <= 0 || n > 15) {
        const errorMsg = `Invalid input. Please refresh and enter a positive integer no larger than 15.`;
        output.textContent = errorMsg;
        console.error(errorMsg);
        return;
    }

    let result = `\nEnter a number\n${n}\n`;

    const isEven = n % 2 === 0;
    const totalRows = isEven ? n + 1 : n;
    const center = Math.floor(totalRows / 2);

    for (let i = 0; i < totalRows; i++) {
        const dist = Math.abs(center - i);
        let spaces, starsStr;

        if (isEven) {
            const stars = dist === center ? 1 : n - (2 * dist);
            spaces = n - stars + 1;
            starsStr = `* `.repeat(stars).trimEnd();
        } else {
            const stars = n - (2 * dist);
            spaces = dist;
            starsStr = `*`.repeat(stars);
        }

        result += ` `.repeat(spaces) + starsStr + `\n`;
    }

    output.textContent = result;
    console.log(result);
};

drawDiamond();
