import { ApolloProvider } from "@apollo/client";
import PropietariosTable from "../components/PropietariosTable";
import client from "../apollo-client";




import '../styles/globals.css'
import UpdatePropietario from "../components/UpdatePropietario";

export default function Propietarios() {
  return(
  <ApolloProvider client={client}>
    <UpdatePropietario />
    <PropietariosTable />    
  </ApolloProvider>) 
}
 