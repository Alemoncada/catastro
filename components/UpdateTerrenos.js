import { useMutation,gql } from '@apollo/react-hooks';



const UPDATE_TERRENO_MUTATION = gql`
    mutation updateTerreno( $tid:number!, $nombret: String, $area: String, $direccion: String, $valor:String, $cosntruccionid: number ) {
        updateTerreno( input: {tid:$tid, nombret: $nombret, area: $area, direccion: $direccion, valor: $valor, cosntruccionid:$cosntruccionid } ) {
            tid
            nombret
            area 
            direccion
            valor
            construccionid
        }            
          
    }
`;


const DELETE_TERRENO_MUTATION = gql`
    mutation deleteTerreno( $tid:number!) {
        deleteTerreno( input: {tid:$tid} ) {
            deletedTerrenoNodeId
        }            
          
    }
`;



const UpdateTerreno = () => {
    let tid, nombret, area, valor, direccion, construccionid;
    const [updateTerreno] = useMutation(UPDATE_TERRENO_MUTATION);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            updateTerreno({ variables: { tid: tid.value, nombret: nombret.value, area: area.value, valor: valor.value, construccionid: construccionid.value, direccion: direccion.value} });
          }}
          
        >
            <div className='form'>
                <h1>ACTUALIZAR TERRENO</h1>
                <div className='form' >
                    <label for="tid">id: </label>
                    <input
                        ref={value => tid = value}
                        id="tid"
                        
                    />
                </div>
                <div className='form' >
                    <label for="nombret">Nombre Terreno: </label>
                    <input
                        ref={value => nombret = value}
                        id="nombret"
                        
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
                    <label for="direccion">Direccion: </label>
                    <input
                        ref={value => direccion = value}
                        id="direccion"
                        
                    />
                </div>
               
                <div className='form'> 
                    <label for="construccionid">Id Construccion a la que pertenece: </label>
                    <input
                        ref={value => construccionid  = value}
                        id="construccionid"
                        
                    />
                </div>
                
                <div >
                    <button type="submit">Actualizar Terreno</button>
                </div>
            </div>
        </form>
      </div>
    );    
};

const DeleteTerreno = () => {
    let tid;
    const [deleteTerreno] = useMutation(DELETE_TERRENO_MUTATION);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            deleteTerreno({ variables: { tid: tid.value} });
          }}
          
        >
            <div className='form'>
                <h1>ELIMINAR TERRENO</h1>
                <div className='form' >
                    <label for="tid">id: </label>
                    <input
                        ref={value => tid = value}
                        id="tid"
                        
                    />
                </div>                
                
                <div >
                    <button type="submit">Eliminar Terreno</button>
                </div>
            </div>
        </form>
      </div>
    );    
}


export default {UpdateTerreno, DeleteTerreno};


