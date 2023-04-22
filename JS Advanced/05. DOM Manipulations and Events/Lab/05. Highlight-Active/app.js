function focused() {
    let inputElements = document.querySelectorAll('input');

    inputElements.forEach(input => {
        input.addEventListener('focus', focusEvent);
        input.addEventListener('blur', blurEvent);
    });

    function focusEvent(event) {
        event.target.parentNode.className = 'focused';
    }

    function blurEvent(event) {
        event.target.parentNode.classList.remove('focused');
    }
}