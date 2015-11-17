

window.onload = function(){
  document.getElementById("exitAppElement").onclick = function() { window.close(); };
  document.getElementById("minAppElement").onclick = function() { chrome.app.window.current().minimize(); };
  document.getElementById("roundDropDown").onclick = function() { listenToSelect(); };
};

function listenToSelect(){
  for(i = 1; i < document.getElementById("roundDropDown").length; i++){
    console.log(document.getElementById("roundDropDown").length);
    if(document.getElementById("roundDropDown").value == i.toString()){
      createGameWindow(i);
    }
  }
}


function createGameWindow(numOfRounds){
      chrome.app.window.create('gamePage.html',{
      id: 'gameWindow',
      innerBounds: {
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 300
      },
      frame:"none"
    }, function (myWindow){ // Waits for page to load | Once page has loaded it sends a message and closes window
       myWindow.contentWindow.addEventListener("load",function(e){chrome.runtime.sendMessage({rounds: numOfRounds}); window.close();});
    }
  );
}
