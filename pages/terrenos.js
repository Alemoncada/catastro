import { ApolloProvider } from "@apollo/client";
import TerrenosTable from "../components/TerrenosTable";
import client from "../apollo-client";
import {UpdateTerreno, DeleteTerreno} from "../components/UpdateTerrenos";

export default function Terrenos() {
  return(
  <ApolloProvider client={client}>
    <DeleteTerreno />
    <UpdateTerreno/>
    <TerrenosTable />    
  </ApolloProvider>) 
}
 