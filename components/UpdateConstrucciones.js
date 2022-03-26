import { useMutation,gql } from '@apollo/react-hooks';



const UPDATE_CONSTRUCCION_MUTATION = gql`
    mutation updateConstruccione($cid:number!, $nombrec: String, $area: String, $valor: String, $agua:Boolean, $predioid: number ) {
        updateConstruccione( input: {cid:$cid, nombrec: $nombrec, area: $area, valor: $valor, agua: $agua, predioid:$predioid } ) {
            cid
            nombrec
            area
            valor
            agua
            predioid
        }            
          
    }
`;



const DELETE_CONSTRUCCIONE_MUTATION = gql`
    mutation deleteConstruccione( $cid:number!) {
        deleteConstruccione( input: {cid:$cid} ) {
            deletedConstruccioneNodeId
        }          
          
    }
`;


const UpdateConstruccione = () => {
    let nombrec, area, valor, agua, predioid;
    const [updateConstruccione] = useMutation(UPDATE_CONSTRUCCION_MUTATION);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateConstruccione({ variables: {cid:cid.value, nombrec: nombrec.value, area: area.value, valor: valor.value, predioid: predioid.value, agua: agua.value} });
          }}
          
        >
            <div className='form'>
                <h1>ACTUALIZAR CONSTRUCCION</h1>
                <div className='form' >
                    <label for="cid">id: </label>
                    <input
                        ref={value => cid = value}
                        id="cid"
                        
                    />
                </div>
                <div className='form' >
                    <label for="nombrec">Nombre Construccion: </label>
                    <input
                        ref={value => nombrec = value}
                        id="nombrec"
                        
                    />
                </div>
                <div className='form'>
                    <label for="area">Area: </label>
                    <input
                        ref={value =>area = value}
                        id="area"
                        
                    />
                </div>
                <div className='form'>
                    <label for="valor">Valor: </label>
                    <input
                        ref={value => valor = value}
                        id="valor"
                        
                    />
                </div>  
                <div className='form'> 
                    <label for="agua">Agua: </label>
                    <input
                        ref={value => agua = value}
                        id="agua"
                        
                    />
                </div>
               
                <div className='form'> 
                    <label for="predioid">Id predio al que pertenece: </label>
                    <input
                        ref={value => predioid  = value}
                        id="predioid"
                        
                    />
                </div>
                
                <div >
                    <button variant="primary" type="submit">Actualizar Construccion</button>
                </div>
            </div>
        </form>
      </div>
    );    
};

const DeleteConstruccione = () => {
    let cid;
    const [deleteConstruccione] = useMutation(DELETE_CONSTRUCCIONE_MUTATION);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            deleteConstruccione({ variables: { cid: cid.value} });
          }}
          
        >
            <div className='form'>
                <h1>ELIMINAR CONSTRUCCION</h1>
                <div className='form' >
                    <label for="cid">id: </label>
                    <input
                        ref={value => cid = value}
                        id="cid"
                        
                    />
                </div>                
                
                <div >
                    <button type="submit">Eliminar Construccion</button>
                </div>
            </div>
        </form>
      </div>
    );    
};

export default {UpdateConstruccione, DeleteConstruccione};
