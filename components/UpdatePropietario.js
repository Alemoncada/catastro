import { useMutation,gql } from '@apollo/react-hooks';




const UPDATE_PROPIETARIO_MUTATION = gql`
    mutation createPropietario($id:number!, $nombre: String, $direccion: String, $telefono: String, $email:String, $tipo: String, $ccNit:String) {
        createPredio( input: { id: $id, nombre: $nombre, direccion: $direccion, telefono: $telefono, email: $email, tipo:$tipo,ccNit: $ccNit} ) {
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


const UpdatePropietario = () => {
    let nombre, direccion, telefono, email, tipo, ccNit;
    const [createPropietario] = useMutation(UPDATE_PROPIETARIO_MUTATION);
  
    return (
      <div>

        <h1> CATASTRO</h1>

        <form
          onSubmit={e => {
            e.preventDefault();
            createPropietario({ variables: {id: id.value, nombre: nombre.value, direccion: direccion.value, telefono: telefono.value, email: email.value, tipo: tipo.value, ccNit: ccNit.value } });
          }}
          
        >
            <div className='form'>
                <h1>ACTUALIZAR PROPIETARIO</h1>
                <div className='form' >
                    <label for="id">id: </label>
                    <input
                        ref={value => id = value}
                        id="id"
                        
                    />
                </div>
                <div className='form' >
                    <label for="nombre">Nombre Propietario: </label>
                    <input
                        ref={value => nombre = value}
                        id="nombre"
                        
                    />
                </div>
                <div className='form'>
                    <label for="direccion">Dirección: </label>
                    <input
                        ref={value =>direccion = value}
                        id="direccion"
                        
                    />
                </div>
                <div className='form'>
                    <label for="telefono">Telefono: </label>
                    <input
                        ref={value => telefono = value}
                        id="telefono"
                        
                    />
                </div>  
                <div className='form'> 
                    <label for="email">email: </label>
                    <input
                        ref={value => email = value}
                        id="email"
                        
                    />
                </div>
               
                <div className='form'> 
                    <label for="tipo">Tipo natural o juridica: </label>
                    <input
                        ref={value => tipo = value}
                        id="tipo"
                        
                    />
                </div>
                <div className='form'> 
                    <label for="ccNit">Cedula o Nit:  </label>
                    <input
                        ref={value => ccNit = value}
                        id="ccNit"
                        
                    />
                </div>
                <div class="pure-controls">
                    <button variant="primary" type="submit">Actualizar Propietario</button>
                </div>
            </div>
        </form>
      </div>
    );    
}

export default UpdatePropietario;
