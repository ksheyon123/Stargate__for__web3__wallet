import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { theme } from "src/Popup/Styles/theme"
import 'src/Popup/global.css';
import App from 'src/Popup/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HashRouter>
    </RecoilRoot>

  </React.StrictMode>
);