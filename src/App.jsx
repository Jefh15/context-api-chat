
// importo mi context
import React from "react";
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
      Chat
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
