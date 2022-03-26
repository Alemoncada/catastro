import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import ConstruccionesTable from "../components/ConstruccionesTable";
import {UpdateConstruccione, DeleteConstruccione} from "../components/UpdateConstrucciones";

export default function Construcciones() {
  return(
  <ApolloProvider client={client}>
      <DeleteConstruccione />
      <UpdateConstruccione />
     <ConstruccionesTable/>    
  </ApolloProvider>) 
}
 