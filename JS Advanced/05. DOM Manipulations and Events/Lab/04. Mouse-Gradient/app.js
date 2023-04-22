function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');

    gradientBox.addEventListener('mousemove', mouseHoverEvent);
}

function mouseHoverEvent(event) {
    let result = document.getElementById('result');

    result.textContent = Math
        .floor(event.offsetX / gradient.clientWidth * 100) + '%';
}