class Matrix {
    constructor(size = 1) {
        this.matrix = Array.from(
            { length: size }, () => Array(size).fill(0)
        )
    }

    matrixPopulate() {
        const size = this.matrix.length
        for (let index = 0; index < size * size; index++) {
            const width = Math.floor(index / size)
            const height = index % size
            this.matrix[width][height] = index + 1
        }
    }

    matrixFlip() {
        const size = this.matrix.length
        for (let width = 0; width < size; width++) {
            for (let height = 0; height < size - width - 1; height++) {
                const oppositeWidth = size - width - 1
                const oppositeHeight = size - height - 1;
                [this.matrix[width][height], this.matrix[oppositeWidth][oppositeHeight]] = [this.matrix[oppositeWidth][oppositeHeight], this.matrix[width][height]]
            }
        }
    }

    display(sectionId = "") {
        const section = document.getElementById(sectionId)
        section.innerHTML = ""
        const tableDisplay = document.createElement("table")
        for (let widthIndex = 0; widthIndex < this.matrix.length; widthIndex++) {
            const tr = document.createElement("tr")
            for (let heightIndex = 0; heightIndex < this.matrix[widthIndex].length; heightIndex++) {
                const td = document.createElement("td")
                td.textContent = this.matrix[widthIndex][heightIndex]
                if (widthIndex + heightIndex === this.matrix.length - 1) {td.classList.add("diagonal")}
                tr.appendChild(td)
            }
            tableDisplay.appendChild(tr)
        }
        section.appendChild(tableDisplay)
    }
}

const runMatrix = () => {
    let size = Number(window.prompt("Please enter the size of your matrix:",))

    while (!Number.isInteger(size) || size <= 0) {
        alert("Please only enter a positive integer!")
        size = Number(window.prompt("Please enter the size of your matrix:",))
    }

    const matrix = new Matrix(size)
    matrix.display("defaultMatrix")

    matrix.matrixPopulate()
    matrix.display("originalMatrix")

    const matrixFlipping = new Matrix(size)
    matrixFlipping.matrix = matrix.matrix.map(width => [...width])
    matrixFlipping.matrixFlip()
    matrixFlipping.display("flippedMatrix")
}

runMatrix()
