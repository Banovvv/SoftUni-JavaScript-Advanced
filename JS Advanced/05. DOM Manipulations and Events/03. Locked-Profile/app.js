function lockedProfile() {
    let buttons = document.querySelectorAll('button');

    for (const button of buttons) {
        button.addEventListener('click', clickEvent);
    }

    function clickEvent(event) {
        let profile = event.target.parentElement;
        let lock = event.target.parentElement
            .querySelector('input[value="lock"]');

        if (lock.checked != true) {
            let hiddenInfo = Array.from(profile.querySelectorAll('div'))
                .find(x => x.id.includes('HiddenFields'));

            if (event.target.textContent === 'Show more') {
                event.target.textContent = 'Hide it'
                hiddenInfo.style.display = 'block'
            } else {
                event.target.textContent = 'Show more'
                hiddenInfo.style.display = 'none'
            }
        }
    }
}