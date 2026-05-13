export const drawDiamond = () => {
  const n = parseInt(window.prompt("Enter a number"));

  for (let i = 0; i < n; i++) {

    const mid = Math.floor(n / 2);
    const dist = Math.abs(i - mid);

    let line = "";

    // EVEN case
    if (n % 2 === 0) {
      const stars = n - 2 * dist;

      for (let s = 0; s < dist + 1; s++) {
        line += " ";
      }

      for (let j = 0; j < stars; j++) {
        line += "* ";
      }

    } else {
      // ODD case
      const stars = n - 2 * dist;

      for (let s = 0; s < dist; s++) {
        line += " ";
      }

      for (let j = 0; j < stars; j++) {
        line += "*";
      }
    }

    console.log(line);
  }
};
