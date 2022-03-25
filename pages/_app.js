import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import CreatePredio from '../components/CreatePredio'
import CreatePropietario from "../components/CreatePropietario";


import '../styles/globals.css'

function App() {
  return(
  <ApolloProvider client={client}>
    <CreatePropietario />
    <CreatePredio />   
  </ApolloProvider>) 
}

export default App
