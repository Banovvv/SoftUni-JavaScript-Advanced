function lowestPrice(input) {
    let products = [];

    input.forEach(element => {
        let [townName, product, price] = element.split(' | ');

        let found = products.find(x => x.product == product)

        if (found) {
            if (found.price > price) {
                found.price = price;
                found.town = townName;
            }
        } else {
            products.push({
                product: product,
                town: townName,
                price: Number(price)
            })
        }
    });

    products.forEach(product => {
        console.log(`${product.product} -> ${product.price} (${product.town})`);
    });
}

lowestPrice([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);