
const orders = [
    {
        date: '2023-05-05',
        subtotal: 900,
        items: [
            {
                product: {
                    id: 'redhat',
                    description: ' lalala',
                    price: 350
                },
                quantity: 2.
            }
        ]
    }
]
function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders
}