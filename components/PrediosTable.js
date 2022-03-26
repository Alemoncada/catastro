import { gql, useQuery } from "@apollo/client";

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

const { loading, error, data } = useQuery(ALL_PLAYERS_QUERY);

if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const predios = data.predios

  return (
    <div></div>
  );

}

export default PrediosTable