// Write a function that checks if a given matrix of numbers is magical. A matrix is magical if the sums of the cells of every row and every column are equal. 
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// The output is a Boolean result indicating whether the matrix is magical or not.
function magicMatrices(arrs) {
    let result = true;
    let rowSum = arrs[0].reduce((a, b) => a + b, 0);
    let colSum = 0;

    for (let i = 0; i < arrs.length; i++) {
        colSum += arrs[i][0]
        let currentRowSum = arrs[i].reduce((a, b) => a + b, 0);

        if (currentRowSum != rowSum) {
            return false;
        }
    }

    for (let i = 0; i < arrs.length; i++) {
        let currentColSum = 0;

        for (let j = 0; j < arrs[0].length; j++) {
            currentColSum += arrs[0][j];
        }

        if (currentColSum != colSum) {
            return false;
        }
    }

    return result;
}

console.log(magicMatrices(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])); // True
console.log(magicMatrices(
    [[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]])); // False
console.log(magicMatrices(
    [[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]])); // True