import React from 'react'
// importo mi componente
import Agregar from './Agregar'


// importo mi context para poder llamar mis metodos
import { ChatContext } from '../context/ChatProvider'


const Chat = () => {


    // hago destructuring para poder llamar los metodos
    const { mensajes, usuario } = React.useContext(ChatContext)


    return (
        // px-2 --> para que no se nos pegue al costado derecho y izquierdo
        <div className='mt-3 px-2 '>

            {/* HAGO MI RECORRIDO */}
            {
                mensajes.map((item, index) => (
                    // PREGUNTAMOS SI 
                    // EL USUARIO ES IGUAL AL ITEM DE UID, pintamos al lado derecho
                    usuario.uid === item.uid ? (
                        // {/* Mensaje propio lado derecho */ }
                        // {/* para eso trabajamos con flexbox */ }
                        < div
                            // le agrego los estilos
                            className='d-flex justify-content-end mb-2'
                            // le envio la key
                            key={index}
                        >
                            <span
                                className='badge badge-pill badge-primary'
                            >
                                {/* Mensaje del usuario activo */}
                                {item.texto}
                            </span>
                        </div>
                    ) : (
                        // SI NO ES IGUAL, pintamos el lado izquierdo porque es nuetro usuario externo
                        // {/* Mensaje propio lado izquierdo */ }
                        // {/* para eso trabajamos con flexbox */ }
                        < div
                            // le agrego los estilos
                            className='d-flex justify-content-start mb-2'
                            // le envio la key
                            key={index}
                        >
                            <span
                                className='badge badge-pill badge-secondary'
                            >
                                {/* {Mensaje del usuario externo} */}
                                {item.texto}
                            </span>
                        </div>
                    )
                ))
            }

            {/* Agrego mi componente */}
            <Agregar />
        </div >
    )
}

export default Chat