function storeCatalogue(arr) {
    let catalogue = {};
    arr.forEach((el) => {
        let [product, price] = el.split(' : ');
        price = Number(price);
        let index = product[0];
        if (!catalogue[index]) {
            catalogue[index] = {};
        }
        catalogue[index][product] = price;
    });
    let initialSort = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    for (let key of initialSort) {
        let products = Object.entries(catalogue[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`);
        })
    }
}


storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']

)