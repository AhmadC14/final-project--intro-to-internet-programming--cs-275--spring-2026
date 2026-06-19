class Diamond {
    constructor(size) {this.size = size}

    diamondCreate() {
        let displayOutput = ""
        const size = this.size
        if (size % 2 === 1) {
            const middleWidth = size / 2
            for (let width = 0; width <= middleWidth; width++) {
                for (let height = 0; height < (2 * width + 1); height++) {
                    displayOutput += "*"
                }
                displayOutput += "\n"
            }
            for (let width = middleWidth - 1; width >= 0; width--) {
                for (let height = 1; height < (2 * width + 1); height++) {
                    displayOutput += "*"
                }
                displayOutput += "\n"
            }
        } else {
            const middleWidth = size / 2
            displayOutput += " *  \n"
            for (let width = 1; width <= middleWidth; width++) { 
                for (let height = 0; height < width * 2; height++) {
                    displayOutput += "* "
                }
                displayOutput += "\n"
            }
            for (let width = middleWidth - 1; width >= 1; width--) {
                for (let height = 0; height < width * 2; height++) {
                    displayOutput += "* "
                }
                displayOutput += "\n"
            }
            displayOutput += " *  "
        }
        const displayOutputElement = document.createElement("output")
        displayOutputElement.innerHTML = `<pre>${displayOutput}</pre>`
        document.body.appendChild(displayOutputElement)
    }
}

const runDiamond = () => {
    let size = Number(window.prompt("Please enter the size of your diamond:",))
    while (!Number.isInteger(size) || size <= 0) {
        alert("Please only enter a positive integer!")
        size = Number(window.prompt("Please enter the size of your diamond:",))
    }
    const diamond = new Diamond(size)
    diamond.diamondCreate()
}

runDiamond()
