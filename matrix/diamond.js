const outputPane = document.getElementById("output");

// Get user input
export const renderDiamond = () => {
    const rawInput = window.prompt(`Enter a number:`);
    const gridSize = parseInt(rawInput, 10);

    // Validate user input
    if (isNaN(gridSize) || gridSize <= 0) {
        const warningText = `Please enter a valid positive integer.`;
        outputPane.textContent = warningText;
        console.log(warningText);
        return;
    }

    let renderedOutput = `Enter a number\n${gridSize}\n\n`;

    const evenDimension = gridSize % 2 === 0;
    const rowCount = evenDimension ? gridSize + 1 : gridSize;
    const midPoint = Math.floor(rowCount / 2);

    for (let currentRow = 0; currentRow < rowCount; currentRow++) {
        const offsetFromCenter = Math.abs(midPoint - currentRow);
        let paddingSpaces, starSegment;

        // Even number
        if (evenDimension) {
            const starTotal =
                offsetFromCenter === midPoint
                    ? 1
                    : gridSize - (2 * offsetFromCenter);

            paddingSpaces = gridSize - starTotal + 1;
            starSegment = `* `.repeat(Math.max(starTotal, 0)).trimEnd();
        }
        // Odd number
        else {
            const starTotal = gridSize - (2 * offsetFromCenter);
            paddingSpaces = offsetFromCenter;
            starSegment = `*`.repeat(Math.max(starTotal, 0));
        }

        const formattedLine = ` `.repeat(paddingSpaces) + starSegment;
        renderedOutput += formattedLine + `\n`;

        console.log(formattedLine);
    }

    // Print final diamond matrix to screen
    outputPane.textContent = renderedOutput;
    console.log(`\nFULL OUTPUT:\n` + renderedOutput);
};
