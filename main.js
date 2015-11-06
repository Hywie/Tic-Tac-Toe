var logicalTable = new Array(3);
var player1Turn = true;
var gameStarted = false;

window.onload = function() {
  document.getElementById("button").addEventListener("click",startGame);
  createLogicalGrid();
};

function createLogicalGrid(){
  var row = new Array(3);
  
  for(var i = 0; i < 3; i++){
    for(var y = 0; y < 3; y++){
      row[y] = document.getElementsByName(i.toString()+","+y.toString())[0];
      row[y].addEventListener("click",tileClicked, false);
    }
   this.logicalTable[i] = row;
  }
}


function startGame(){
  var player1Score, player2Score = 0;
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
  if(gameStarted && this.style.backgroundColor === ""){
    console.log("gamehasstarted");
    if(player1Turn){
      this.style.backgroundColor = "red";
      displayMessage(document.getElementById("feedbackArea"),"Your turn Player Two");
      player1Turn = !player1Turn;
    } else{
      this.style.backgroundColor = "blue";
      displayMessage(document.getElementById("feedbackArea"),"Your turn Player One");
      player1Turn = !player1Turn;
    }
  }
}

function removeChildNodes(node){
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}
