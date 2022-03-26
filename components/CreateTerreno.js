import { useMutation,gql } from '@apollo/react-hooks';



const CREATE_TERRENO_MUTATION = gql`
    mutation createTerreno($nombret: String!, $area: String!, $direccion: String!, $valor:String!, $cosntruccionid: number ) {
        createTerreno( input: { nombret: $nombret, area: $area, direccion: $direccion, valor: $valor, cosntruccionid:$cosntruccionid } ) {
            tid
            nombret
            area 
            direccion
            valor
            construccionid
        }            
          
    }
`;


const CreateTerreno = () => {
    let nombret, area, valor, direccion, construccionid;
    const [createTerreno] = useMutation(CREATE_TERRENO_MUTATION);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            createTerreno({ variables: { nombret: nombret.value, area: area.value, valor: valor.value, construccionid: construccionid.value, direccion: direccion.value} });
          }}
          
        >
            <div className='form'>
                <h1>TERRENO</h1>
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
                
                <div class="pure-controls">
                    <button type="submit">Crear Terreno</button>
                </div>
            </div>
        </form>
      </div>
    );    
}

export default CreateTerreno;
