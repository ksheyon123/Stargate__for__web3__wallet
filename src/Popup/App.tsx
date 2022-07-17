import React from 'react';

declare global {
  interface Window {
    chrome: any;
  }
}

const App = () => {

  const { chrome } = window;

  const sendMessage = () => {

    console.log(chrome);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs: any) => {
      chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, (response: any) => {
        console.log(response);
      });
    });
  }

  return (
    <div className="App">
      <span>Hello World A</span>

      <button onClick={() => sendMessage()}>handler</button>
    </div>
  );
}

export default App;
