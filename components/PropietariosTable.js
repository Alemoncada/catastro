import { gql, useQuery } from "@apollo/client";
import Table from 'react-bootstrap/Table'

export const ALL_PROPIETARIOS_QUERY = gql`
  query PropietariosQuery {
  propietarios{
    nodes{
        id
        nombre
        direccion
        telefono
        email
        tipo
        ccNit    
    }
    
  }
}
`;

const PropietariosTable = () =>{

const { loading, error, data } = useQuery(ALL_PROPIETARIOS_QUERY);

if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const propietarios = data.propietarios

  return (

    <div>

      <h1>PROPIETARIOS</h1>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre Propietario</th>
          <th>direccion</th>
          <th>telefono</th>
          <th>email</th>
          <th>tipo</th>
          <th>cc - Nit</th>

        </tr>
      </thead>
      <tbody>
        {propietarios.map((propietario) => (
          <tr>
          <td>{propietario.id}</td>
          <td>{propietario.nombre}</td>
          <td>{propietario.direccion}</td>
          <td>{propietario.telefono}</td>
          <td>{propietario.email}</td>
          <td>{propietario.tipo}</td>
          <td>{propietario.ccNit}</td>
        </tr>
        ))};
        
      </tbody>
    </Table>

    </div>

  );

};

export default PropietariosTable;