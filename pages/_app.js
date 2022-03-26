import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import CreateConstruccione from "../components/CreateConstrucciones";
import CreatePredio from '../components/CreatePredio'
import CreatePropietario from "../components/CreatePropietario";
import CreateTerreno from "../components/CreateTerreno";
import { Button } from "antd";
import Link from "next/link";

import '../styles/globals.css'

export default function App() {
  return(
    <>
    <div>
      <h1>CATASTRO</h1>
      <div>
      <Link href="/predios"><Button type="primary">VER PREDIOS</Button></Link>
      <Link href="/propietarios"><Button type="primary">VER PROPIETARIOS</Button></Link>
      <Link href="/construcciones"><Button type="primary">VER CONSTRUCCIONES</Button></Link>
      <Link href="/terrenos"><Button type="primary">VER TERRENOS</Button></Link>
    </div>

    </div>
  <ApolloProvider client={client}>
    <CreatePropietario />
    <CreatePredio />   
    <CreateConstruccione />
    <CreateTerreno />
  </ApolloProvider>
  </>) 
}


