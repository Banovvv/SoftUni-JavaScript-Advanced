function printEveryNthElement(elements, n) {
    var result = [];

    for (let i = 0; i < elements.length; i += n) {
        result.push(elements[i]);
    }

    return result;
}

console.log(printEveryNthElement(['5','20', '31', '4', '20'], 2));
console.log(printEveryNthElement(['dsa', 'asd', 'test', 'tset'], 2));
console.log(printEveryNthElement(['1', '2', '3', '4', '5'], 6));
