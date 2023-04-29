function attachEventsListeners() {
    let convert = document.getElementById('convert');
    let inputUnit = document.getElementById('inputUnits').value;
    let inputDistance = document.getElementById('inputDistance');
    let outputUnit = document.getElementById('outputUnits').value;
    let outputDistance = document.getElementById('outputDistance');

    convert.addEventListener('click', convertEvent);

    function convertEvent() {
        let input = Number(inputDistance.value);
        let result = 0;

        switch (inputUnit) {
            case 'km':
                input *= 1000; break;
            case 'm':
                input = input; break;
            case 'cm':
                input *= 0.01; break;
            case 'mm':
                input *= 0.001; break;
            case 'mi':
                input *= 1609.34; break;
            case 'yrd':
                input *= 0.9144; break;
            case 'ft':
                input *= 0.3048; break;
            case 'in':
                input *= 0.0254; break;
        }

        switch (outputUnit) {
            case 'km':
                result = input / 1000; break;
            case 'm':
                result = input; break;
            case 'cm':
                result = input / 0.01; break;
            case 'mm':
                result = input / 0.001; break;
            case 'mi':
                result = input / 1609.34; break;
            case 'yrd':
                result = input / 0.9144; break;
            case 'ft':
                result = input / 0.3048; break;
            case 'in':
                result = input / 0.0254; break;
        }

        outputDistance.value = result;
    }
}