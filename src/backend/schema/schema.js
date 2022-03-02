//This schema is further imported in index.js
const graphql = require('graphql')

//These types are used to convert the Javascript data types and custom data types to GQL friendly types for compliation.
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql

//Add a root query to print a welcome to graphql when the query contains 'status' field.
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    status: {
      type: GraphQLString,
      resolve(parent, args) {
        return 'welcome to GRAPHQL'
      },
    },
  },
})

//exporting the query as GQL schema, so that GQL can parse it as a schema.
//GQL schema takes key value pairs
module.exports = new GraphQLSchema({
  query: RootQuery,
})
