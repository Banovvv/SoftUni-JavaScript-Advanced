function deleteByEmail() {
    let result = 'Not found.';
    let input = document.querySelector('input[name="email"]');

    let cells = document.querySelectorAll('td');

    cells.forEach(cell => {
        if (cell.textContent === input.value) {
            let parent = cell.parentElement;
            parent.parentElement.removeChild(parent);
            result = 'Deleted';
        }
    });

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
    input.value = '';
}