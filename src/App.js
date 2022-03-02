import './App.css'
import Home from './Pages/Home'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client'

function App() {
  const client = new ApolloClient({
    //information needed to create the server
    cache: new InMemoryCache(),

    //uri is the link for the api
    uri: 'https://graphql-weather-api.herokuapp.com/',
  })
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}

export default App
