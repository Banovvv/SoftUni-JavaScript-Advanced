function evenPositionElement(elements) {
    var result = [];

    for (let i = 0; i < elements.length; i += 2) {
        result.push(elements[i]);
    }
S
    console.log(result.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);