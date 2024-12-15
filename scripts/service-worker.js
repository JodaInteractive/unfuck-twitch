(async () => {
    await chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
        if (details.url.includes('twitch.tv')) {
            chrome.scripting.executeScript({
                target: {tabId: details.tabId},
                files: ['./scripts/content.js']
            });
        }
    });
})();