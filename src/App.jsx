
// importo mi context
import React from "react";
import Chat from "./components/Chat";
// importo mi componente
import Navbar from "./components/Navbar";
// importo mi Provider
import { ChatContext } from "./context/ChatProvider";

function App() {

  // hago destructuring
  const { usuario } = React.useContext(ChatContext)



  // si usuario es distinto de null ---> osea usuario no es null
  return usuario !== null ? (
    // devuelva todo esto
    (<div>
      <Navbar />
      {/* El chat se va a mostrar 
      solo si el usuario esta activo,
      caso contrario debe moestrar mensaje que acceda */}
      {
        usuario.estado ? (
          <Chat />
        ) : (
          // CASO DE QUE NO ESTE LOGEADO, MUESTRE MENSAJE DEBES INICIAR SESION
          <div
            className="lead text-center mt-5"
          >
            Debes iniciar sesión
          </div>
        )
      }
    </div>)
  ) : (
    // si viene vacio diga cargando
    // cada vez que actualizamos el sitio dira cargando
    <div>
      Cargando...
    </div>
  )
}

export default App;
