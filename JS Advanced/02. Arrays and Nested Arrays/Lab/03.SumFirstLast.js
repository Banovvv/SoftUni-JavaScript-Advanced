function sumFirstLast(elements) {
    return Number(elements.shift()) + Number(elements.pop());
}

console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));
