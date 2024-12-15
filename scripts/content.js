async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitForElement(selector) {
    while (document.querySelector(selector) === null) {
        await sleep(1000);
    }
    return document.querySelector(selector);
}

async function unfuckTitleBar() {

    const persistentPlayerPromise = await waitForElement('.persistent-player');
    const channelRootPromise = await waitForElement('.channel-root__info');
    const titleBarPromise = await waitForElement('.channel-root__upper-watch');

    const [persistentPlayer, channelRoot, titleBar] = await Promise.all([persistentPlayerPromise, channelRootPromise, titleBarPromise]);

    persistentPlayer.style.top = '0px';
    channelRoot.prepend(titleBar);
}

(async ()=> {
    await unfuckTitleBar();
})();

