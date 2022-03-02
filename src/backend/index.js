const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const app = express()

// app.use('/', (req, res) => {
//   res.send('Welcome to Graphql server')
// })

app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }))
app.listen(5000, () => {
  console.log('server listening on port 5000')
})
