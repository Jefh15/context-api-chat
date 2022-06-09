import React from 'react'

// exporto el contexto o provider que es mi clase
export const ChatContext = React.createContext()



// para configurar el provider llamabamos a los props
const ChatProvider = (props) => {

    const saludo = 'Hola desde chat'


    return (
        // uso la constante que tiene mi context para agregarle que es un provider
        <ChatContext.Provider
            // le paso el valor que quiero pasar a que usen mis hijos
            value={{
                // paso mi prop
                saludo
            }}
        >
            {/* enviamos los hijos */}
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider