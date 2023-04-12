function solve() {
    const selectMenu = document.getElementById('selectMenuTo');

    const binary = document.createElement('option');
    binary.textContent = 'Binary';
    binary.value = 'binary';

    const hexadecimal = document.createElement('option');
    hexadecimal.textContent = 'Hexadecimal';
    hexadecimal.value = 'hexadecimal';

    selectMenu.appendChild(binary);
    selectMenu.appendChild(hexadecimal);

    const selectMap = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase()
    }

    const button = document.querySelector('#container > button');

    button.addEventListener('click', (evt) => {
        const input = document.getElementById('input');
        const output = document.getElementById('result');

        output.value = selectMap[selectMenu.value](+input.value);
    })
}