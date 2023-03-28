function sortNumbers(numbers) {
    let result = [];
    let sortedNumbers = numbers.sort(function (a, b) {
        return a - b
    });
    let length = numbers.length / 2;

    for (let i = 0; i < length; i++) {
        result.push(sortedNumbers.shift());
        result.push(sortedNumbers.pop());
    }

    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));