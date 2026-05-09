const createMatrix = (n = 3) =>
    Array.from({ length: n }, () => Array(n).fill(0));

const populate = (m = []) => {
    let v = 1;

    for (let i = 0; i < m.length * m.length; i++) {
        const r = Math.floor(i / m.length);
        const c = i % m.length;

        m[r][c] = v++;
    }
};

const flip = (m = []) => {
    const n = m.length;

    for (let i = 0; i < n * n; i++) {
        const r = Math.floor(i / n);
        const c = i % n;

        if (r + c >= n - 1) {
            continue;
        }

        const rr = n - 1 - c;
        const cc = n - 1 - r;

        [m[r][c], m[rr][cc]] =
            [m[rr][cc], m[r][c]];
    }
};

const render = (m = [], mount) => {
    const table = document.createElement("table");

    m.forEach((row, r) => {
        const tr = document.createElement("tr");

        row.forEach((val, c) => {
            const td = document.createElement("td");

            if (r + c === m.length - 1) {
                td.classList.add("diag");
            }

            td.textContent = val;

            tr.appendChild(td);
        });

        table.appendChild(tr);
    });

    mount.appendChild(table);
};

export {
    createMatrix,
    populate,
    flip,
    render
};
