function janNotation(elements) {
    let numbers = [];

    for (let element of elements) {
        if (typeof element == 'number') {
            numbers.push(element)
        } else {
            if (numbers.length < 2) {
                console.log(`Error: not enough operands!`);

                return;
            }

            let secondNumber = numbers.pop();
            let firstNumber = numbers.pop();

            if (element == '+') {
                let result = firstNumber + secondNumber;
                numbers.push(result);
            } else if (element == '-') {
                let result = firstNumber - secondNumber;
                numbers.push(result);
            } else if (element == '*') {
                let result = firstNumber * secondNumber;
                numbers.push(result);
            } else if (element == '/') {
                let result = firstNumber / secondNumber;
                numbers.push(result);
            }
        }
    }

    if (numbers.length > 1) {
        console.log(`Error: too many operands!`)
    } else if (numbers.length == 1) {
        console.log(numbers[0])
    }
}
janNotation([
    3,
    4,
    '+']);
janNotation([
    5,
    3,
    4,
    '*',
    '-']);