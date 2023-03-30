function equalNeighbors(arrs) {
    let counter = 0;

    arrs.forEach((_, i, arr) => {
        arr[i].forEach((_, j) => {
            if (j < arr[i].length - 1) {
                if (arr[i][j] === arr[i][j + 1]) {
                    arr++;
                };
            };
        });
    });

    arrs.forEach((_, k, arr) => {
        arr[k].forEach((_, l) => {
            if (k < arr.length - 1) {
                if (arr[k][l] === arr[k + 1][l]) {
                    counter++;
                };
            };
        });
    });

    console.log(counter);
}

equalNeighbors(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);

equalNeighbors(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
);
