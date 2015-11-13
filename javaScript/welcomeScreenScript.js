

window.onload = function(){
  document.getElementById("exitAppElement").onclick = function() { window.close(); };
  document.getElementById("minAppElement").onclick = function() { chrome.app.window.current().minimize(); };
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