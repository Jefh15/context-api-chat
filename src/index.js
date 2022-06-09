import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';


// importo el chatprovider
import ChatProvider from './context/ChatProvider.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // Envuelvo mis hijos
  <ChatProvider>
    {/* Hijos */}
    <App />

  </ChatProvider>
  // {/* </React.StrictMode> */ }
);
