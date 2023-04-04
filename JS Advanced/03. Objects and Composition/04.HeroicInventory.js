function heroicInventory(input) {
    let heroes = [];

    input.forEach(element => {
        let heroParts = element.split(' / ');
        let items = heroParts[2].split(', ');

        heroes.push({
            name: heroParts[0],
            level: Number(heroParts[1]),
            items: items
        });
    });

    console.log(JSON.stringify(heroes, null, 2));
}

heroicInventory(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']);

heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);