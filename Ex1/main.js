let product = {
    name: 'headphone',
    price: 120,
    doesItWork: false,
    previousOwner: 'bob'
}

for (const keys in product) {
    console.log( `${keys}: ${product[keys]}`);
}

delete product.previousOwner;
console.log(product);

product.doesItWork = true
console.log(product);

if (product.price > 100) {
    product.discountPercentage = product.price * .10
}
console.log(product);

let discountPercentage = product.price * .10
product.price = (product.price - discountPercentage)

console.log(product);
if ('discountPercentage' in product){
    console.logg(`We got some ${product.name} on sale for just ${product.price}, that's${product.discountPercentage} off`)
