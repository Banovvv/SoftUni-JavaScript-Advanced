function biggerHalf(numbers) {
    return numbers
        .sort(function (a, b) { return a - b })
        .slice(Math.ceil(numbers.length / 2));
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));