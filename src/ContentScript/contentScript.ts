const fs = require("fs");

declare global {
  interface Window {
    chrome: any;
  }
}

const { chrome } = window;

let port: any;

const startToRelay = () => {
  port = window.chrome.runtime.connect({
    name: "stargate-background-content",
  });
  console.log(port);
};

startToRelay();

window.addEventListener("STARGATE_RELAY_REQUEST", (event: any) => {
  try {
    console.log("event", event);
  } catch (e) {}
});

chrome.runtime.onMessage.addListener((detail: any) => {
  const customEvent = new CustomEvent("STARGATE_RELAY_REQUEST", { detail });
  console.log("detail", detail);
  window.dispatchEvent(customEvent);
});

export {};
