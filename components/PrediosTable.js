import { gql, useQuery } from "@apollo/client";
import Table from 'react-bootstrap/Table'

export const ALL_PREDIOS_QUERY = gql`
  query PrediosQuery {
  predios{
    nodes{
      pid
      nombrep
      avaluo
      departamento
      municipio
      propietariosid
    
    }
    
  }
}
`;

const PrediosTable = () =>{

const { loading, error, data } = useQuery(ALL_PREDIOS_QUERY);

if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const predios = data.predios

  return (

    <div>

      <h1>PREDIOS</h1>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre Predio</th>
          <th>Avaluo</th>
          <th>Departamento</th>
          <th>Municipio</th>
          <th>Propietarios Id</th>

        </tr>
      </thead>
      <tbody>
        {predios.map((Predio) => (
          <tr>
          <td>{predio.pid}</td>
          <td>{predio.nombrep}</td>
          <td>{predio.avaluo}</td>
          <td>{predio.departamento}</td>
          <td>{predio.municipio}</td>
          <td>{predio.propietariosid}</td>
        </tr>
        ))};
        
      </tbody>
    </Table>

    </div>

  );

}

export default PrediosTable