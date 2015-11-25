function createMenuWindow() {
    chrome.app.window.create(
    'html/welcomeScreen.html',
    {
      id: 'welcomeWindow',
      innerBounds: {
        maxWidth: 450,
        maxHeight: 350,
        minWidth: 450,
        minHeight: 350
      },
      frame:"none"
    }
  );
    window.close();
}

function createGameWindow(numOfRounds) {
    chrome.app.window.create('html/gamePage.html', {
        id: 'gameWindow',
        innerBounds: {
            width: 800,
            height: 600,
            minWidth: 400,
            minHeight: 300
        },
        frame: "none"
    }, function(myWindow) { // Waits for page to load | Once page has loaded it sends a message and closes window
        myWindow.contentWindow.addEventListener("load", function(e) {
            chrome.runtime.sendMessage({
                rounds: numOfRounds
            });
            window.close();
        });
    });
}