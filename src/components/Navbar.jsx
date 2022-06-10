import React from 'react'


// importo mi contexto
import { ChatContext } from '../context/ChatProvider'

const Navbar = () => {

    // de mi contexto obtengo los props, hago una desestructuracion
    // useContext ---> le paso mi contexto
    const {
        usuario,
        iniciarSesion,
        cerrarSesion
    } = React.useContext(ChatContext)









    return (
        // creo un navbar
        <nav className="navbar navbar-dark bg-dark">
            {/* creo un texto que diga chat */}
            <span className="navbar-brand">Chat</span>
            {/* creo mi caja para decirl que tenga dentro */}
            <div>

                {/* CREO MI CONDICION */}
                {
                    usuario.estado ? (

                        // USUARIO LOGEADO

                        // {/* CREO MI BOTON */ }
                        < button
                            // clase del boton
                            className="btn btn-outline-danger my-2 my-sm-0 mr-2"
                            // creo mi metodo para cerrar sesion
                            onClick={cerrarSesion}
                        >
                            Cerrar Sesion
                        </button>
                    ) : (

                        // USUARIO NO LOGEADO

                        // {/* CREO MI BOTON */ }
                        < button
                            className="btn btn-outline-success my-2 my-sm-0"
                            // creo mi metodo para iniciar sesion
                            onClick={iniciarSesion}
                        >
                            Iniciar Sesion
                        </button>
                    )
                }
            </div>
        </nav >
    )
}

export default Navbar