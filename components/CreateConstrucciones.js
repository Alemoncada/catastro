import { useMutation,gql } from '@apollo/react-hooks';



const CREATE_CONSTRUCCION_MUTATION = gql`
    mutation createConstruccione($nombrec: String!, $area: String!, $valor: String!, $agua:Boolean!, $predioid: number ) {
        createConstruccione( input: { nombrec: $nombrec, area: $area, valor: $valor, agua: $agua, predioid:$predioid } ) {
            cid
            nombrec
            area
            valor
            agua
            predioid
        }            
          
    }
`;


const CreateConstruccione = () => {
    let nombrec, area, valor, agua, predioid;
    const [createConstruccione] = useMutation(CREATE_CONSTRUCCION_MUTATION);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            createConstruccione({ variables: { nombrec: nombrec.value, area: area.value, valor: valor.value, predioid: predioid.value, agua: agua.value} });
          }}
          
        >
            <div className='form'>
                <h1>CONSTRUCCIONES</h1>
                <div className='form' >
                    <label >Nombre Construccion: </label>
                    <input
                        ref={value => nombrec = value}
                        id="nombrec"
                        
                    />
                </div>
                <div className='form'>
                    <label >Area: </label>
                    <input
                        ref={value =>area = value}
                        id="area"
                        
                    />
                </div>
                <div className='form'>
                    <label >Valor: </label>
                    <input
                        ref={value => valor = value}
                        id="valor"
                        
                    />
                </div>  
                <div className='form'> 
                    <label >Agua: </label>
                    <input
                        ref={value => agua = value}
                        id="agua"
                        
                    />
                </div>
               
                <div className='form'> 
                    <label >Id predio al que pertenece: </label>
                    <input
                        ref={value => predioid  = value}
                        id="predioid"
                        
                    />
                </div>
                
                <div>
                    <button type="submit">Crear Construccion</button>
                </div>
            </div>
        </form>
      </div>
    );    
}

export default CreateConstruccione;
