function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    let inputArea = document.getElementsByTagName('textarea')[0];
    let outputArea = document.getElementsByTagName('textarea')[1];

    buttons.forEach(button => {
        if (button.textContent === 'Encode and send it') {
            button.addEventListener('click', encodeEvent);
        } else if (button.textContent === 'Decode and read it') {
            button.addEventListener('click', decodeEvent);
        }
    });

    function encodeEvent(event) {
        let encodedMessage = '';

        inputArea.value
            .split('')
            .forEach(letter => {
                encodedMessage += String
                    .fromCharCode(letter.charCodeAt(0) + 1);
            });

        outputArea.value = encodedMessage;
        inputArea.value = '';
    }

    function decodeEvent(event) {
        let decodedMessage = '';

        outputArea.value
            .split('')
            .forEach(letter => {
                decodedMessage += String
                    .fromCharCode(letter.charCodeAt(0) - 1);
            });

        outputArea.value = decodedMessage;
    }
}