const createRow = (count, separator = '') => [...Array(count)].fill('*').join(separator);

const buildDiamond = (n) => {
    const isEven = n % 2 === 0;
    const totalRows = isEven ? n + 1 : n;
    const rows = [];

    for (let i = 0; i < totalRows; i++) {
        const stars = isEven
            ? (Math.min(i, n - i) === 0 ? 1 : 2 * Math.min(i, n - i))
            : 2 * Math.min(i, n - 1 - i) + 1;

        const content = isEven ? createRow(stars, ' ') : createRow(stars);
        const cw = content.length;
        const leading = isEven ? n - Math.floor(cw / 2) : (n - stars) / 2;

        rows.push(`${' '.repeat(leading)}${content}`);
    }

    return rows.join('\n');
};

export { buildDiamond };
