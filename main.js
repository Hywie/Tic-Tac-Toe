var logicalTable = new Array(3);
var playerOTurn = true;
var gameStarted = false;

window.onload = function() {
  document.getElementById("button").addEventListener("click",startGame);
  createLogicalGrid();
};

function createLogicalGrid(){
  
  for(var i = 0; i < 3; i++){
    var row = new Array(3);
    for(var y = 0; y < 3; y++){
      row[y] = document.getElementsByName(i.toString()+","+y.toString())[0];
      row[y].addEventListener("click",tileClicked, false);
    }
   this.logicalTable[i] = row;
  }
}


function startGame(){
  var playerOScore, playerXScore = 0;
  var gameOver;
  gameStarted = true;
  displayMessage(document.getElementById("feedbackArea"),"Your turn Player One");
}

function displayMessage(areaToAppendTo, messageToDisplay){
  removeChildNodes(areaToAppendTo);
  var headerObject = document.createElement("H1");
  headerObject.appendChild(document.createTextNode(messageToDisplay));
  areaToAppendTo.appendChild(headerObject);
}

function tileClicked(){
  if(gameStarted && this.innerHTML === ""){
    console.log("gamehasstarted");
    if(playerOTurn){
      markGrid("O",this);
      displayMessage(document.getElementById("feedbackArea"),"Your turn Player X");
      playerOTurn = !playerOTurn;
    } else{
      markGrid("X",this);
      displayMessage(document.getElementById("feedbackArea"),"Your turn Player O");
      playerOTurn = !playerOTurn;
    }
  }
}

function removeChildNodes(node){
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

function markGrid(markValue,grid){
  var headerObject = document.createElement("H1");
  headerObject.appendChild(document.createTextNode(markValue));

  headerObject.style.fontSize = "500%";
  
  grid.appendChild(headerObject);
}
