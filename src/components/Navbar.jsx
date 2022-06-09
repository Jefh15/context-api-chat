import React from 'react'
import { ChatContext } from '../context/ChatProvider'

const Navbar = () => {

    // const { usuario, iniciarSesion, cerrarSesion } = React.useContext(ChatContext)

    return (
        // creo un navbar
        <nav className="navbar navbar-dark bg-dark">
            {/* creo un texto que diga chat */}
            <span className="navbar-brand">Chat</span>
            {/* creo mi caja para decirl que tenga dentro */}
            <div>

                {/* CREO MI CONDICION */}
                {/* {
                    usuario.activo ? ( */}

                {/* CREO MI BOTON */}
                <button
                    // clase del boton
                    className="btn btn-outline-success my-2 my-sm-0 mr-2"
                // onClick={cerrarSesion}
                >
                    Salir
                </button>
                {/* ) : ( */}

                {/* CREO MI BOTON */}
                <button
                    className="btn btn-outline-danger my-2 my-sm-0"
                // onClick={iniciarSesion}
                >
                    Acceder
                </button>
                {/* )
                } */}
            </div>
        </nav>
    )
}

export default Navbar