function negativePositeveNumbers(numbers) {
    let result = []

    numbers.forEach(element => {
        if (element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    });

    result.forEach(element => {
        console.log(element);
    });
}

negativePositeveNumbers([7, -2, 8, 9]);
negativePositeveNumbers([3, -2, 0, -1]);
