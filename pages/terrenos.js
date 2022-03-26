import { ApolloProvider } from "@apollo/client";
import TerrenosTable from "../components/TerrenosTable";
import client from "../apollo-client";


import '../styles/globals.css'
import UpdateTerreno from "../components/UpdateTerrenos";

export default function Terrenos() {
  return(
  <ApolloProvider client={client}>
    <UpdateTerreno/>
    <TerrenosTable />    
  </ApolloProvider>) 
}
 