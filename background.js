chrome.action.onClicked.addListener((tab) => {
    const currentUrl = new URL(tab.url);
    //const regex = /^https?:\/\/(www\.)?example\.com(\/.*)?$/;
    console.log(currentUrl.origin)
    // Check if the current tab's URL is "www.example.com"
    if (currentUrl.origin === "https://medium.com") {
      const redirectUrl = `https://freedium.cfd/${currentUrl.href}`;
      
      // Redirect the current tab to the new URL
      chrome.tabs.update(tab.id, { url: redirectUrl });
    } else {
      console.log("This extension works only on https://medium.com.");
    }
  });
  