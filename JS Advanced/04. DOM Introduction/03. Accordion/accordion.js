function toggle() {
    let button = document.getElementsByClassName('button');
    let text = document.getElementById('extra');

    if (button[0].textContent === 'More') {
        text.style.display = 'block';
        button[0].textContent = 'Less';
    } else {
        text.style.display = 'none';
        button[0].textContent = 'More';
    }
}