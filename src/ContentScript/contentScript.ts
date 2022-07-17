declare global {
  interface Window {
    chrome: any;
  }
}

const { chrome } = window;

chrome.runtime.onMessage.addListener(
  (request: any, sender: any, sendResponse: any) => {
    console.log(
      sender.tab
        ? "from a content script:" + sender.tab.url
        : "from the extension"
    );
    if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
  }
);

export {};
