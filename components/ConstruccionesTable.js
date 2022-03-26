import { gql, useQuery } from "@apollo/client";
import Table from 'react-bootstrap/Table'

export const ALL_CONSTRUCCIONES_QUERY = gql`
  query TerrenosQuery {
  terrenos{
    nodes{
      cid
      nombrec
      area
      valor
      agua
      predioid
    }
    
  }
}
`;

const ConstruccionesTable = () =>{

const { loading, error, data } = useQuery(ALL_CONSTRUCCIONES_QUERY);

if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const construcciones = data.construcciones

  return (

    <div>

      <h1>CONSTRUCCIONES</h1>

    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre Construccion</th>
          <th>Area</th>
          <th>Valor</th>
          <th>Agua</th>
          <th>Predio al que pertenece</th>
        </tr>
      </thead>
      <tbody>
        {construcciones.map((construccione) => (
          <tr>
            <td>{construccione.cid}</td>
            <td>{construccione.nombrec}</td>
            <td>{construccione.area}</td>
            <td>{construccione.valor}</td>
            <td>{construccione.agua}</td>
            <td>{construccione.predioid}</td>
          </tr>
        ))};
        
      </tbody>
    </Table>

    </div>

  );

};

export default ConstruccionesTable;