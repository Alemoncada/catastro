
import { useMutation,gql } from '@apollo/react-hooks';

const CREATE_PREDIO_MUTATION = gql`
    mutation createPredio($nombrep: String!, $avaluo: String!, $departamento: String!, $municipio:String!) {
        createPredio( input:  { nombrep: $nombrep, avaluo: $avaluo, departamento: $departamento, municipio: $municipio} ) {
      pid
      nombrep
      avaluo
      departamento
      municipio
      
    
        }
    }
`;

const CreatePredio = () => {
    let nombrep,avaluo,departamento,municipio;
    const [createPredio] = useMutation(CREATE_PREDIO_MUTATION);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            createPredio({ variables: { nombrep: nombrep.value, avaluo: avaluo.value, departamento: departamento.value, municipio: municipio.value } });
          }}
          
        >
            <div className='form'>
                <h1>PREDIO</h1>
                <div className='form' >
                    <label >Nombre Predio: </label>
                    <input
                        ref={value => nombrep = value}
                        id="nombrep"
                        
                    />
                </div>
                <div className='form'>
                    <label >Avaluo: </label>
                    <input
                        ref={value => avaluo = value}
                        id="avaluo"
                        
                    />
                </div>
                <div className='form'>
                    <label >Departamento: </label>
                    <input
                        ref={value => departamento = value}
                        id="departamento"
                        
                    />
                  </div>
                  <div className='form'>
                    <label >Municipio: </label>
                    <input
                        ref={value => municipio = value}
                        id="municipio"
                        
                    />
                </div>
                <div >
                    <button type="submit">Crear Predio</button>
                </div>
            </div>
        </form>
      </div>
    );    
}

export default CreatePredio;


