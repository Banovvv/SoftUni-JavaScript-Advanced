const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']

    },
];

function objectFactory(functions, orders) {
    var products = [];

    for (let order of orders) {
        let product = {};
        let { template, parts } = order;

        product.name = template.name;

        for (let func of parts) {
            product[func] = functions[func];
        }

        products.push(product);
    }

    return products;
}

const products = objectFactory(library, orders);

console.log(products); 
