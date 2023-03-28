function extractIncreasingSubsequence(elements) {
    let result = []
    let highestValue = elements[0];

    for (let i = 0; i < elements.length; i++) {
        if (elements[i] >= highestValue) {
            highestValue = elements[i]
            result.push(highestValue);
        }
    }
    
    return result;
}

console.log(extractIncreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractIncreasingSubsequence([1, 2, 3, 4]));
console.log(extractIncreasingSubsequence([20, 3, 2, 15, 6, 1]));