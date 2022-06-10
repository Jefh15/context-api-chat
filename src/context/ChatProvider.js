import React, { useEffect, useState } from 'react'
// importo mi proveedor firebase
import { auth, db, provider } from '../firebase'






// exporto el contexto o provider que es mi clase
export const ChatContext = React.createContext()



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
    // creo el estado para poder guardar mis mensajes
    const [mensajes, setMensajes] = React.useState([])




    // tenemos que detectar el usuario
    useEffect(() => {

        detectarUsuario()

        // [] ---> para que se ejecute solo una vez
    }, [])











    // METODOS-------------------------------------


    // creo mi metodo para poder detectar si viene el usuario logeado o no
    const detectarUsuario = () => {

        // valido el usuario --> viene de firebase
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

    // metodo para poder ingresar
    const iniciarSesion = async () => {


        // como es una peticion usamos try y catch
        try {
            // PETICION DE MI proveedor de google
            // guardo mi peticion en una constante para poder llamar mi provedor
            const res = await auth.signInWithPopup(provider)
            // para ver que trae
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    // metodo para cerrar sesion
    const cerrarSesion = () => {
        // auth me ayuda a obtener el metodo de cerrar sesion
        auth.signOut()
    }


    // metodo para cargar los mensajes
    const cargarMensajes = () => {
        db.collection('messages').orderBy('fecha')
            .onSnapshot(query => {
                const arrayMensajes = query.docs.map(item => item.data())
                setMensajes(arrayMensajes)
            })
    }



    // metodo para agregar mensajes
    const agregarMensaje = async (uid, texto) => {
        try {
            await db.collection('messages').add({
                uid: uid,
                texto: texto,
                fecha: Date.now()
            })
        } catch (error) {
            console.log(error)
        }
    }






    return (
        // uso la constante que tiene mi context para agregarle que es un provider
        <ChatContext.Provider
            // le paso el valor que quiero pasar a que usen mis hijos
            value={{
                // paso mi props que quiero compartir
                usuario,
                iniciarSesion,
                cerrarSesion,
                mensajes,
                agregarMensaje
            }}
        >
            {/* enviamos los hijos */}
            {props.children}
        </ChatContext.Provider>
    )
}

export default ChatProvider