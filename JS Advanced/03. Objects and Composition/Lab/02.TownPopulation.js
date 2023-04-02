function townPopulation(elements) {
    let towns = {};

    elements.forEach(element => {
        townInfo = element.split(" <-> ", 2);

        if (towns[`${townInfo[0]}`] == undefined) {
            towns[`${townInfo[0]}`] = 0;
        }

        towns[`${townInfo[0]}`] += parseInt(townInfo[1]);
    });

    console.log(towns);
}

townPopulation(
    ['Sofia <-> 1200000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Montana <-> 20000',
    'Las Vegas <-> 1000000']);

townPopulation(
    ['Istanbul <-> 100000', 
    'Honk Kong <-> 2100004', 
    'Jerusalem <-> 2352344', 
    'Mexico City <-> 23401925', 
    'Istanbul <-> 1000']);