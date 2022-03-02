//This schema is further imported in index.js
const graphql = require('graphql')
const _ = require('lodash')

//These types are used to convert the Javascript data types and custom data types to GQL friendly types for compliation.
//Needed to fetch and show the data for the query
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
} = graphql

//Adding static data
let cities = [
  {
    id: '1',
    name: 'New Delhi',
    country: 'India',
    weatherId: '4',
  },
  {
    id: '2',
    name: 'Uttar Pradesh',
    country: 'India',
    weatherId: '3',
  },
  {
    id: '3',
    name: 'Madhya Pradesh',
    country: 'India',
    weatherId: '2',
  },
  {
    id: '4',
    name: 'Boston',
    country: 'USA',
    weatherId: '1',
  },
]
//One city can have only one weather but, one weather can be at different cities, that's why we need to provide IDs to
//identify them uniquely.
//The city has weather ID to identify what weather it has.

let weather = [
  {
    id: '1',
    summary: 'Sunny',
  },
  {
    id: '2',
    summary: 'Overcast',
  },
  {
    id: '3',
    summary: 'Stormy',
  },
  {
    id: '4',
    summary: 'Rain',
  },
]

//Creating a user defined GQLObject type for cities and weather
const cityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    country: { type: GraphQLString },
    weatherID: { type: GraphQLID },
  }),
})

const weatherType = new GraphQLObjectType({
  name: 'Weather',
  fields: () => ({
    id: { type: GraphQLID },
    summary: { type: GraphQLString },
  }),
})

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
