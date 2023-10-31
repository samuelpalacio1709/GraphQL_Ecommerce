const products = [
    {
        id: 'redshoe',
        price: 32,
        description: "Lorem impsum",
        reviews: []

    },
    {
        id: 'redhat',
        price: 22,
        description: "Lorem impsu",
        reviews: []

    },
    ,
    {
        id: 'leash',
        price: 223,
        description: "Lorem impsu",
        reviews: []

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

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    }
    products.push(newProduct);
    return newProduct;
}
function addNewProductReview(id, comment, rating) {
    const newReview = {
        comment,
        rating
    }
    const selectedProduct = getProductByID(id)
    selectedProduct.reviews.push(newReview)
    return selectedProduct;
}
module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductByID,
    addNewProduct,
    addNewProductReview
}