let product = {
    name: 'headphone',
    price: 120,
    doesItWork: false,
    previousOwner: 'bob'
}

for (const keys in product) {
    console.log( `${keys}: ${product[keys]}`);
}
