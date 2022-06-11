import React from 'react'
// importo mi componente
import Agregar from './Agregar'


// importo mi context para poder llamar mis metodos
import { ChatContext } from '../context/ChatProvider'


const Chat = () => {


    // hago destructuring para poder llamar los metodos
    const { mensajes, usuario } = React.useContext(ChatContext)

    // para poder hacer que mi ultimo mensaje tenga un ref, igual cuando se refresque mi sitio aparezca el scroll en el ultimo mensaje
    const refZonaChat = React.useRef(null)


    // cada vez que se cargue el sitio
    React.useEffect(() => {

        // muestro las propiedades
        // console.log(refZonaChat)
        // scrollTop ---> donde empieza de 0
        // scrollHeight ---> donde llega de alto
        // refZonaChat.current.scrollTop ----> nuestro scrollTop va a tener la misma altura que nuestro refZonaChat.current.scrollHeight
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight

        // [mensajes] ---> cada que se detecte un nuevo mensaje se haga esa comprobacion
    }, [mensajes])



    return (
        // px-2 --> para que no se nos pegue al costado derecho y izquierdo
        <div
            className='mt-3 px-2 '
            style={{
                // estilo
                height: '75vh',
                // se cree el scroll
                overflowY: 'scroll'
            }}
            // hago al referencia
            ref={refZonaChat}
        >

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