
//import gql from 'graphql-tag';
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
            <div>
                <h1>PREDIO</h1>
                <div className='form' >
                    <label for="title">Nombre Predio</label>
                    <input
                        ref={value => nombrep = value}
                        id="nombrep"
                        
                    />
                </div>
                <div >
                    <label for="avaluo">Avaluo</label>
                    <input
                        ref={value => avaluo = value}
                        id="avaluo"
                        
                    />
                </div>
                <div >
                    <label for="departamento">Departamento</label>
                    <input
                        ref={value => departamento = value}
                        id="departamento"
                        
                    />
                  </div>
                  <div>
                    <label for="municipio">Municipio</label>
                    <input
                        ref={value => municipio = value}
                        id="municipio"
                        
                    />
                </div>
                <div class="pure-controls">
                    <button type="submit">Crear Predio</button>
                </div>
            </div>
        </form>
      </div>
    );    
}

export default CreatePredio;


