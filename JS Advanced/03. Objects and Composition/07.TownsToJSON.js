function townsToJson(input) {
    let towns = [];

    for (let i = 1; i < input.length; i++) {
        let [town, latitude, longitude] = input[i]
            .split('|')
            .filter(element => element)
            .map(element => element.trim());
        
        let latParts = latitude.split('.', 2);
        let lonParts = longitude.split('.', 2);    

        towns.push({
            Town: town,
            Latitude: Number(`${latParts[0]}.${latParts[1][0]}${latParts[1][1]}`),
            Longitude: Number(`${lonParts[0]}.${lonParts[1][0]}${lonParts[1][1]}`)
        });
    }

    console.log(JSON.stringify(towns, null, 2));
}

townsToJson([
    '| Town | Latitude | Longitude |', 
    '| Sofia | 42.696552 | 23.32601 |', 
    '| Beijing | 39.913818 | 116.363625 |']);
    
townsToJson([
    '| Town | Latitude | Longitude |', 
    '| Veliko Turnovo | 43.0757 | 25.6172 |', 
    '| Monatevideo | 34.50 | 56.11 |']);

