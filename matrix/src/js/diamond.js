const buildDiamond = (size = 5) => {
    const fragment = document.createDocumentFragment();

    if (size % 2 === 0) {
        for (let i = 1; i <= size; i += 2) {
            const row = document.createElement("div");

            const spaces = (size - i) / 2;

            row.textContent =
                `${" ".repeat(spaces)}${"* ".repeat(i).trim()}`;

            fragment.appendChild(row);
        }

        for (let i = size - 2; i >= 1; i -= 2) {
            const row = document.createElement("div");

            const spaces = (size - i) / 2;

            row.textContent =
                `${" ".repeat(spaces)}${"* ".repeat(i).trim()}`;

            fragment.appendChild(row);
        }
    } else {
        for (let i = 0; i < size; i++) {
            const row = document.createElement("div");

            const mid = Math.floor(size / 2);

            const distance = Math.abs(mid - i);

            const stars = size - distance * 2;

            row.textContent =
                `${" ".repeat(distance)}${"*".repeat(stars)}`;

            fragment.appendChild(row);
        }
    }

    return fragment;
};

export default buildDiamond;
