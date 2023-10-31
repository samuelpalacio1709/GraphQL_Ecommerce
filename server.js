const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { makeExecutableSchema } = require('@graphql-tools/schema')


//Schema files --Data Structure
const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql'],
});

//Resolvers  -- Data Source
const resolversArray = loadFilesSync('**/*', {
    extensions: ['resolvers.js'],
});

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray

})

const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

app.listen(3000, () => {
    console.log('Running GraphQl server')
})