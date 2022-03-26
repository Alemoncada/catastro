import { ApolloProvider } from "@apollo/client";
import TerrenosTable from "../../components/TerrenosTable";
import client from "../apollo-client";


import '../styles/globals.css'

export default function Terrenos() {
  return(
  <ApolloProvider client={client}>
     <TerrenosTable />    
  </ApolloProvider>) 
}
 