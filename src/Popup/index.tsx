import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import { theme } from "src/Popup/Styles/theme"
import { PATH } from "src/Popup/Constants/index";
import 'src/Popup/global.css';
import App from 'src/Popup/App';

declare global {
  interface Window {
    chrome: any;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>
);