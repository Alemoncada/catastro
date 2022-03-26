import { ApolloProvider } from "@apollo/client";
import PropietariosTable from "../components/PropietariosTable";
import client from "../apollo-client";
import {UpdatePropietario, DeletePropietario} from "../components/UpdatePropietario";

export default function Propietarios() {
  return(
  <ApolloProvider client={client}>
    <DeletePropietario />
    <UpdatePropietario />
    <PropietariosTable />    
  </ApolloProvider>) 
}
 