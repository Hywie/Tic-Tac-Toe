

function main(){
  
}



function createGameWindow(){
      chrome.app.window.create('index.html',{
      id: 'mainWindow',
      innerBounds: {
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 300
      }
    }
  );
  
}