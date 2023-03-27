function cookingByNumbers(number, ...params) {
    console.log(number);

    params.forEach(param => {
        if (param == 'chop') {
            number /= 2;
        } else if (param == 'dice') {
            number = Math.sqrt(number);
        } else if (param == 'spice') {
            number += 1;
        } else if (param == 'bake') {
            number *= 3;
        } else if (param == 'fillet') {
            number = (number * 0.80).toFixed(1);
        }

        console.log(number);
    });
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');