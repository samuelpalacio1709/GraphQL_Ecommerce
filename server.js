const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')


//Schema files
const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
});
const schema = makeExecutableSchema({
    typeDefs: typesArray
})

//Data Source
const root = {
    orders: require('./orders/orders.model'),
    products: require('./products/products.model')

}


const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(3000, () => {
    console.log('Running GraphQl server')
})