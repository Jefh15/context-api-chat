
// importo mi context
import React from "react";
import { ChatContext } from "./context/ChatProvider";

function App() {

  // hago destructuring
  const { saludo } = React.useContext(ChatContext)



  return (
    <div>
      Chat {saludo}
    </div>
  );
}

export default App;
