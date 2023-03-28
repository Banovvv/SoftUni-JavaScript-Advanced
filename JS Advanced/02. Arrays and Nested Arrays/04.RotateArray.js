function rotateArray(elements, n) {
    for (let i = 0; i < n; i++) {
        let element = elements.pop();
        elements.unshift(element);
    }

    console.log(elements.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);