import React from 'react'


// importo mi context para poder llamar mis metodos
import { ChatContext } from '../context/ChatProvider'

const Agregar = () => {

    // hago destructuring para poder llamar los metodos
    // usuario ---> porque ocupamos agregar un usuario
    // agregarMensajes ---> porque vamos a creaer los mensajes
    const { usuario, agregarMensaje } = React.useContext(ChatContext)
    // agregamos nuestro estado que tiene los mensajes

    // creo el estado para poder guardar mi mensaje por eso es de tipo '' --> string
    const [mensaje, setMensaje] = React.useState('')

    // el metodo on submit ---> que es cuando se le de enter
    // usa un evento
    const formualrio = (e) => {

        // par que no se nos actualice el sitio web
        e.preventDefault()

        // valido si mi mensaje esta vacio en mi input no agregue el mensaje a la base de datos
        if (!mensaje.trim()) {
            // muestro este mensaje
            console.log('Mensaje vacio')
            // salimos del metodo
            return
        }

        // agregarMensajes() --> recibe un uid que es --> usuario.uid 
        // usuario.uid ---> recibe un texto que es --> mensaje
        agregarMensaje(usuario.uid, mensaje)
        // limpiamos el mensaje del estado
        setMensaje('')

    }



    return (
        <form
            // esta clase me ayuda a que el formulario se vaya para abajo
            className='fixed-bottom input-group p-3 bg-dark'
            // metodo que controla mi formulario
            onSubmit={formualrio}
        >
            <input type="text"
                className='form-control'
                // el valor de mi input es 
                value={mensaje}
                // onChange()---> es un vento que recibe mi setMensaje() y le agrego mi mensaje
                onChange={(e) => setMensaje(e.target.value)}
            />

            <div
                className='input-group-append'
            >
                <button
                    className='btn btn-primary'
                    // para que permita el enter de mi boton
                    type='submit'
                >
                    Enviar
                </button>
            </div>

        </form>
    )
}

export default Agregar