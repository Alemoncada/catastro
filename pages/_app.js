import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import CreateConstruccione from "../components/CreateConstrucciones";
import CreatePredio from '../components/CreatePredio'
import CreatePropietario from "../components/CreatePropietario";
import CreateTerreno from "../components/CreateTerreno";


import '../styles/globals.css'

function App() {
  return(
  <ApolloProvider client={client}>
    <CreatePropietario />
    <CreatePredio />   
    <CreateConstruccione />
    <CreateTerreno />
  </ApolloProvider>) 
}

export default App
