/**
 * Listens for the app launching, then creates the window.
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function(launchData) {
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
});
