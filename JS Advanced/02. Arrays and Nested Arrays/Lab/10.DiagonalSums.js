function diagonalSums(arrs) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    let firstIndex = 0;
    let secondIndex = arrs[0].length - 1;

    arrs.forEach(arr => {
        firstDiagonal += arr[firstIndex++];
        secondDiagonal += arr[secondIndex--];
    });

    console.log(`${firstDiagonal} ${secondDiagonal}`);
}

diagonalSums([[20, 40], [10, 60]]);
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);