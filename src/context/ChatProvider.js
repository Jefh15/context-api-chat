import React, { useEffect, useState } from 'react'

// exporto el contexto o provider que es mi clase
export const ChatContext = React.createContext()

import { auth, db, provider } from '../firebase'





// para configurar el provider llamabamos a los props
const ChatProvider = (props) => {

    // inicializo el usuario
    const dataUsuario = {
        // hago mi objeto
        uid: null,
        email: null,
        estado: null
    }



    // creo el estado para poder guardar mi usuario
    // inicializo mi usuario ---> dataUsuario
    const [usuario, setUsuario] = useState(dataUsuario)


    // tenemos que detectar el usuario
    useEffect(() => {

        detectarUsuario()

        // [] ---> para que se ejecute solo una vez
    }, [])


    const detectarUsuario = () => {

        // valido el usuario
        auth.onAuthStateChanged(user => {
            // pregunto si el usuario trae algo
            if (user) {

                // SI ESTA LOGEADO y se detecte
                // si el usuario existe
                // hago mi objeto
                setUsuario({
                    // le seteo esta informacion
                    uid: user.uid,
                    email: user.email,
                    estado: true
                })

            } else {
                // SI EL USUARIO NO ESTA LOGEADO
                // si el usuario NO EXISTE
                // si no trae nada le mandamos el objeto de dataInicial
                setUsuario({
                    uid: null,
                    email: null,
                    // le paso el estado en false
                    estado: false
                })
            }
        })

    }





    return (
        // uso la constante que tiene mi context para agregarle que es un provider
        <ChatContext.Provider
            // le paso el valor que quiero pasar a que usen mis hijos
            value={{
                // paso mi prop
                usuario
            }}
        >
            {/* enviamos los hijos */}
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider