function lastKNumbers(n, k) {
    let result = [];
    result[0] = 1;
    result.length = n;

    for (let i = 1; i < result.length; i++) {
        result[i] = 0;

        for (let j = 1; j <= k; j++) {
            if (i - j < 0) {
                result[i] += 0;
            } else {
                result[i] += result[i - j];
            }
        }
    }

    return result;
}

console.log(lastKNumbers(6, 3));
console.log(lastKNumbers(8, 2));