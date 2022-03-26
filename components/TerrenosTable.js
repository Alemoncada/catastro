import { gql, useQuery } from "@apollo/client";
import Table from 'react-bootstrap/Table'

export const ALL_TERRENOS_QUERY = gql`
  query ConstruccionesQuery {
  construcciones{
    nodes{
        tid
        nombret
        area 
        direccion
        valor
        construccionid
    }
    
  }
}
`;

const TerrenosTable = () =>{

const { loading, error, data } = useQuery(ALL_TERRENOS_QUERY);

if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const terrenos = data.terrenos

  return (

    <div>

      <h1>TERRENOS</h1>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre Terreno</th>
          <th>Area</th>
          <th>Valor</th>
          <th>direccion</th>
          <th>Construccion a la que pertenece</th>
        </tr>
      </thead>
      <tbody>
        {terrenos.map((terreno) => (
          <tr>
            <td>{terreno.tid}</td>
            <td>{terreno.nombret}</td>
            <td>{terreno.area}</td>
            <td>{terreno.valor}</td>
            <td>{terreno.direccion}</td>
            <td>{terreno.construccionid}</td>
          </tr>
        ))};
        
      </tbody>
    </Table>

    </div>

  );

};

export default TerrenosTable;