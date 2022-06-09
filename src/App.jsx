
// importo mi context
import React from "react";
// importo mi componente
import Navbar from "./components/Navbar";
// importo mi Provider
import { ChatContext } from "./context/ChatProvider";

function App() {

  // hago destructuring
  const { saludo } = React.useContext(ChatContext)



  return (
    <div>
      <Navbar />
      Chat {saludo}
    </div>
  );
}

export default App;
