function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    document.getElementById('daysBtn')
        .addEventListener('click', convertEvent);
    document.getElementById('hoursBtn')
        .addEventListener('click', convertEvent);
    document.getElementById('minutesBtn')
        .addEventListener('click', convertEvent);
    document.getElementById('secondsBtn')
        .addEventListener('click', convertEvent);

    function convert(value, unit) {
        let days = value / ratios[unit];

        return {
            days: days,
            hours: days * ratios.hours,
            minutes: days * ratios.minutes,
            seconds: days * ratios.seconds
        }
    }

    function convertEvent(event) {
        let input = event.target.parentElement
            .querySelector('input[type="text"]');

        let time = convert(Number(input.value), input.id)

        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}