function smallestTwoNumbers(numbers) {
    console.log(numbers
        .sort(function (a, b) { return a - b })
        .slice(0, 2)
        .join(' ')
    );
}

smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);
