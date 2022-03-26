import { useMutation,gql } from '@apollo/react-hooks';

const UPDATE_PREDIO_MUTATION = gql`
    mutation updatePredio($pid:number!, $nombrep: String, $avaluo: String, $departamento: String, $municipio:String) {
        updatePredio( input:  { pid:$pid, nombrep: $nombrep, avaluo: $avaluo, departamento: $departamento, municipio: $municipio} ) {
      pid
      nombrep
      avaluo
      departamento
      municipio
      
    
        }
    }
`;

const DELETE_PREDIO_MUTATION = gql`
    mutation deletePredio( $tid:number!) {
        deletePredio( input: {tid:$tid} ) {
            deletedPredioNodeId
        }          
          
    }
`;


const UpdatePredio = () => {
    let pid, nombrep,avaluo,departamento,municipio;
    const [updatePredio] = useMutation(UPDATE_PREDIO_MUTATION);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            updatePredio({ variables: { pid:pid.value, nombrep: nombrep.value, avaluo: avaluo.value, departamento: departamento.value, municipio: municipio.value } });
          }}
          
        >
            <div className='form'>
                <h1>ACTUALIZAR PREDIO</h1>
                <div className='form' >
                    <label for="pid">pId: </label>
                    <input
                        ref={value => pid = value}
                        id="pid"
                        
                    />
                </div>
                <div className='form' >
                    <label for="nonmbrep">Nombre Predio: </label>
                    <input
                        ref={value => nombrep = value}
                        id="nombrep"
                        
                    />
                </div>
                <div className='form'>
                    <label for="avaluo">Avaluo: </label>
                    <input
                        ref={value => avaluo = value}
                        id="avaluo"
                        
                    />
                </div>
                <div className='form'>
                    <label for="departamento">Departamento: </label>
                    <input
                        ref={value => departamento = value}
                        id="departamento"
                        
                    />
                  </div>
                  <div className='form'>
                    <label for="municipio">Municipio: </label>
                    <input
                        ref={value => municipio = value}
                        id="municipio"
                        
                    />
                </div>
                <div >
                    <button type="submit">Actualizar Predio</button>
                </div>
            </div>
        </form>
      </div>
    );    
};


const DeletePredio = () => {
    let tid;
    const [deletePredio] = useMutation(DELETE_PREDIO_MUTATION);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            deletePredio({ variables: { pid: pid.value} });
          }}
          
        >
            <div className='form'>
                <h1>ELIMINAR PREDIO</h1>
                <div className='form' >
                    <label for="pid">id: </label>
                    <input
                        ref={value => pid = value}
                        id="pid"
                        
                    />
                </div>                
                
                <div >
                    <button type="submit">Eliminar Predio</button>
                </div>
            </div>
        </form>
      </div>
    );    
};


export default {UpdatePredio, DeletePredio};