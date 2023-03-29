function processOddPositions(numbers) {
    let result = [];

    for (let i = 1; i < numbers.length; i += 2) {
        result.unshift(numbers[i] * 2);
    }

    console.log(result.join(' '));
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);
