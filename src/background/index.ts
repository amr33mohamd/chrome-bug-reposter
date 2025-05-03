import { handleMessage } from './messageHandler';

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    const isAsync = handleMessage(msg, sendResponse);
    return isAsync; // keeps sendResponse open if needed
});
