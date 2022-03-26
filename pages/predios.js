import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import PrediosTable from "../components/PrediosTable";
import {UpdatePredio, DeletePredio} from "../components/UpdatePredio";

export default function Predios() {
  return(
    
  < ApolloProvider client={client}>
    <DeletePredio />  
    <PrediosTable />    
  </ApolloProvider> 
  
  ) 
}
 