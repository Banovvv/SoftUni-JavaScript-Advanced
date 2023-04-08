function toggle() {
    let buttons = document.getElementsByClassName('button');
    let text = document.getElementById('extra');

    if (buttons[0].textContent === 'More') {
        text.style.display = 'block';
        buttons[0].textContent = 'Less';
    } else {
        text.style.display = 'none';
        buttons[0].textContent = 'More';
    }
}  