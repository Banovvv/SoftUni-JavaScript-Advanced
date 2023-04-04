function storeCatalogue(input) {
    input.sort((a, b) => a.localeCompare(b));
    let char = '';

    input.forEach(item => {
        let [product, price] = item.split(' : ');

        if(product[0]!= char){
            console.log(product[0]);
        }

        console.log(`  ${product}: ${price}`);

        char = product[0];
    });
}
 
storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

storeCatalogue([
    'Banana : 2', 
    'Rubics Cube : 5', 
    'Raspberry P : 4999', 
    'Rolex : 100000', 
    'Rollon : 10', 
    'Rali Car : 2000000', 
    'Pesho : 0.000001', 
    'Barrel : 10']);