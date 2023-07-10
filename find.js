const products = [
    { name: 'phone', price: 2500 },
    { name: 'smart watch', price: 3500 },
    { name: 'router', price: 5000 },
    { name: 'keyboard', price: 2500 },
    { name: 'head phone', price: 5000 },
    { name: 'pen', price: 25 },
];
const findProduct = products.find(product => product.price == 5000);
console.log(findProduct);