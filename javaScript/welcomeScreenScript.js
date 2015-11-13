

window.onload = function(){
  document.getElementById("exitAppElement").onclick = function() { window.close(); };
  document.getElementById("minAppElement").onclick = function() { chrome.app.window.current().minimize(); };
  document.getElementById("roundDropDown").onclick = function() { listenToSelect(); };
};

function listenToSelect(){
  for(i = 1; i < document.getElementById("roundDropDown").length; i++){
    console.log(document.getElementById("roundDropDown").length);
    if(document.getElementById("roundDropDown").value == i.toString()){
      createGameWindow();
    }
  }
}


function createGameWindow(){
      chrome.app.window.create('gamePage.html',{
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