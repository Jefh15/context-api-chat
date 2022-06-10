import React from 'react'
import Agregar from './Agregar'

const Chat = () => {



    return (
        // px-2 --> para que no se nos pegue al costado derecho y izquierdo
        <div className='mt-3 px-2 '>
            {/* Mensaje propio lado derecho */}
            {/* para eso trabajamos con flexbox */}
            <div
                className='d-flex justify-content-end mb-2'
            >
                <span
                    className='badge badge-pill badge-primary'
                >Mensaje del usuario activo</span>
            </div>
            {/* Mensaje propio lado izquierdo */}
            {/* para eso trabajamos con flexbox */}
            <div
                className='d-flex justify-content-start mb-2'
            >
                <span
                    className='badge badge-pill badge-secondary'
                >Mensaje del usuario externo</span>
            </div>
            {/* Agrego mi componente */}
            <Agregar />
        </div>
    )
}

export default Chat