import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import ConstruccionesTable from "../components/ConstruccionesTable";



import '../styles/globals.css'

export default function Construcciones() {
  return(
  <ApolloProvider client={client}>
     <ConstruccionesTable/>    
  </ApolloProvider>) 
}
 