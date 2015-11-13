

window.onload = function(){
  document.getElementById("exitIcon").onclick = function() { window.close(); };
};


function createGameWindow(){
      chrome.app.window.create('welcomePage.html',{
      id: 'gameWindow',
      innerBounds: {
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 300
      }
    }
  );
  
  window.close();
}