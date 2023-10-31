const products = [
    {
        id: 'redshoe',
        price: 32,
        description: "Lorem impsu"
    },
    {
        id: 'redhat',
        price: 22,
        description: "Lorem impsu"
    },
    ,
    {
        id: 'leash',
        price: 223,
        description: "Lorem impsu"
    },
]

function getAllProducts() {
    return products
}
function getProductsByPrice(min, max) {

    return products.filter((product) => {
        return product.price > min && product.price < max
    })
}

function getProductByID(id) {
    console.log(id)
    return products.find((product) => product.id === id)
}
module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductByID
}