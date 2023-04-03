function calorieObject(params) {
    let foods = {};

    for (let i = 0; i < params.length; i++) {
        if (i % 2 == 0) {
            foods[params[i]] = Number(params[i + 1]);
        }
    }

    console.log(foods);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);