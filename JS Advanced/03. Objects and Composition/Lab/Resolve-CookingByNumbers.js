function cookingByNumbers(number, ...params) {
    console.log(number);

    const actions = {
        chop() { number /= 2; },
        dice() { number = Math.sqrt(number); },
        spice() { number += 1; },
        bake() { number *= 3; },
        fillet() { number = (number * 0.80).toFixed(1); }
    };

    params.forEach(command => {
        actions[command]();

        console.log(number);
    });
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');