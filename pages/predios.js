import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import ConstruccionesTable from "../components/ConstruccionesTable";
import UpdatePredio from "../components/UpdatePredio";



import '../styles/globals.css'

export default function Construcciones() {
  return(
  <ApolloProvider client={client}>
    <UpdatePredio />
     <ConstruccionesTable />    
  </ApolloProvider>) 
}
 