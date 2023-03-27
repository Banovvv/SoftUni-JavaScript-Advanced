function wordsUppercase(input) {
    console.log(input.match(/\w+/g).map(word => word.toUpperCase()).join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');