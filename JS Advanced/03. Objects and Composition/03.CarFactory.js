const engines = {
    smallEngine: function (car) {
        car.engine = {
            power: 90,
            volume: 1800
        }
    },
    normalEngine: function (car) {
        car.engine = {
            power: 120,
            volume: 2400
        }
    },
    monsterEngine: function (car) {
        car.engine = {
            power: 200,
            volume: 3500
        }
    }
}

const carriages = {
    hatchback: function (car, object) {
        car.carriage = {
            type: 'hatchback',
            color: object.color
        }
    },
    coupe: function (car, object) {
        car.carriage = {
            type: 'coupe',
            color: object.color
        }
    }
}

function carFactory(object) {
    let car = {
        model: object.model
    };

    if (object.power <= 90) {
        engines.smallEngine(car);
    } else if (object.power <= 123) {
        engines.normalEngine(car);
    } else {
        engines.monsterEngine(car);
    }

    if (object.carriage == 'hatchback') {
        carriages.hatchback(car, object);
    } else if (object.carriage == 'coupe') {
        carriages.coupe(car, object);
    }

    car.wheels = new Array(4)
        .fill(object.wheelsize % 2 == 0 ?
            object.wheelsize - 1 :
            object.wheelsize);

    return car;
}

let car = carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});