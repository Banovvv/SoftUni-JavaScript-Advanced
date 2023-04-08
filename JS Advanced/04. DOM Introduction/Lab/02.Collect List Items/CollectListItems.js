function extractText() {
    var items = document.querySelectorAll('#items li');
    let result = [];

    items.forEach(item => {
        result.push(item.textContent.trim());
    });

    let resultElement = document.getElementById("result");

    resultElement.textContent = result
        .join('\n')
        .trim();
}