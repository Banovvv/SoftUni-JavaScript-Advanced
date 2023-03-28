function printAnArrayWithGivenDelimiter(stringArray, delimiter) {
    let result = '';

    stringArray.forEach(element => {
        result = result.concat(delimiter, element);
    });

    result = result.slice(1);

    console.log(result);
}

printAnArrayWithGivenDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-');
printAnArrayWithGivenDelimiter(['How about no?', 'I', 'will', 'not', 'do', 'it!'], '_');
