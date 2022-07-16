import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/Popup/global.css';
import App from 'src/Popup/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);