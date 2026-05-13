// I had to run my code using "npx http-server" due to the modules giving me an error in my browsers

// let userSize = parseInt(window.prompt(`Enter a number:`));

export function completeDiamond(userSize){
    let middle = Math.floor(userSize / 2);
    let height = 0;

    if (userSize % 2 == 0){
        height = userSize + 1;
    } else {
        height = userSize;
    }

    for(let row = 0; row < height; row++){
        let stars = 0;
        let spaces = 0;

        if(userSize % 2 == 0){

            if(row <= middle){

                if(row == 0){
                    stars = 1;
                    spaces = userSize - 1;

                } else {
                    stars = row * 2;
                    spaces = userSize - row * 2;
                }

            } else {
                if(row == userSize){
                stars = 1;
                } else {
                    stars = (userSize - row) * 2;
                }

                spaces = userSize - stars;
            }

            console.log(` `.repeat(spaces) + ` *`.repeat(stars));

        } else {
            if(row <= middle){
                stars = (row * 2) + 1;
                spaces = middle - row;
                console.log(` `.repeat(spaces) + `*`.repeat(stars));

            } else {
                stars = (userSize - row) * 2 - 1;
                spaces = row - middle;
                console.log(` `.repeat(spaces) + `*`.repeat(stars));
            }
        }
    }
}
