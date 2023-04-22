function validate() {
    let email = document.getElementById('email');
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    email.addEventListener('change', event => {
        if (event.target.value.match(regex)) {
            event.target.removeAttribute('class');
            return;
        }

        email.className = 'error';
    });
}