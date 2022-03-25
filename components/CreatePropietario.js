import { useMutation,gql } from '@apollo/react-hooks';



const CREATE_PROPIETARIO_MUTATION = gql`
    mutation createPropietario($nombre: String!, $direccion: String!, $telefono: String!, $email:String!, $tipo: String!, $ccNit:String!) {
        createPredio( input: { nombre: $nombre, direccion: $direccion, telefono: $telefono, email: $email, tipo:$tipo,ccNit: $ccNit} ) {
        id
        nombre
        direccion
        telefono
        email
        tipo
        ccNit     
    
      }
    }
`;


const CreatePropietario = () => {
    let nombre, direccion, telefono, email, tipo, ccNit;
    const [createPropietario] = useMutation(CREATE_PROPIETARIO_MUTATION);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            createPropietario({ variables: { nombre: nombre.value, direccion: direccion.value, telefono: telefono.value, email: email.value, tipo: tipo.value, ccNit: ccNit.value } });
          }}
          
        >
            <div>
                <h1>PROPIETARIO</h1>
                <div className='form' >
                    <label for="nombre">Nombre Propietario</label>
                    <input
                        ref={value => nombre = value}
                        id="nombre"
                        
                    />
                </div>
                <div >
                    <label for="direccion">Dirección</label>
                    <input
                        ref={value =>direccion = value}
                        id="direccion"
                        
                    />
                </div>
                <div >
                    <label for="telefono">Telefono</label>
                    <input
                        ref={value => telefono = value}
                        id="telefono"
                        
                    />
                </div>  
                <div> 
                    <label for="email">email</label>
                    <input
                        ref={value => email = value}
                        id="email"
                        
                    />
                </div>
               
                <div> 
                    <label for="tipo">Tipo natural o juridica</label>
                    <input
                        ref={value => tipo = value}
                        id="tipo"
                        
                    />
                </div>
                <div> 
                    <label for="ccNit">Cedula o Nit</label>
                    <input
                        ref={value => ccNit = value}
                        id="ccNit"
                        
                    />
                </div>
                <div class="pure-controls">
                    <button type="submit">Crear Propietario</button>
                </div>
            </div>
        </form>
      </div>
    );    
}

export default CreatePropietario;
