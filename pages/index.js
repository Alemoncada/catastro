import { gql } from "@apollo/client";
import client from "../apollo-client";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Table } from 'react-bootstrap';




export default function Home() {
  return (
    <div>
    <div className={styles.container}>
      <Head>
        <title>Catastro</title>
        <meta name="description" content="catastro next app" />
        <link rel="icon" href="/favico.png" />
      </Head>         
    </div>
    <div>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
        
    </div>
    </div>


  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query predios {
        predio {
          
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
 };
}
