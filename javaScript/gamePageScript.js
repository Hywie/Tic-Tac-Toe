
// GLOBAL VARs
var logicalTable = new Array(3);
var playerOTurn = true;
var gameStarted = false;
var numOfRounds = 1;
var roundNum = 1;
  
/*
* Main function that is called on page load.
*/
window.onload = function() {
  createLogicalGrid();
  
  chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      setRounds(request.rounds);
  });
  
  startGame();
};

/*
* Constructs a multi-dimensional array referencing DOM elements of the table.
*/
function createLogicalGrid(){
  
  for(var i = 0; i < 3; i++){
    var row = new Array(3); // Temp row array to be stored in Global Array
    for(var y = 0; y < 3; y++){
      row[y] = document.getElementsByName(i.toString()+","+y.toString())[0];
      row[y].addEventListener("click",tileClicked, false); // Allows app to detect changes when a grid is changed.
    }
   this.logicalTable[i] = row;
  }
}

/*
* Called when the play button is pressed.
* Intialises essential variables
*/
function startGame(){
  var playerOScore, playerXScore = 0; // Ready for future use to enable multiple rounds
  gameStarted = true; // Set boolean to alert game has started
  displayMessage(document.getElementById("feedbackArea"),"Your turn Player One");
  console.log("end");
}

/*
* Generic function to allow feedback to be given in text form through the banner.
*/
function displayMessage(areaToAppendTo, messageToDisplay){
  removeChildNodes(areaToAppendTo);
  var headerObject = document.createElement("H1");
  headerObject.appendChild(document.createTextNode(messageToDisplay));
  areaToAppendTo.appendChild(headerObject);
}

/*
* Called on the event of a tile in the table being clicked.
* calls functions to see if their is a winner and gives feedback.
*/
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
  if(calcWinner()){
    gameStarted = false;
    resetRound();
  }
  if(this.roundNum > this.numOfRounds){
    console.log("End");
  }
}

/*
* Removes all child nodes in the feedback div to allow more text to be overwritten.
*/
function removeChildNodes(node){
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
}

/*
* Adds a header element as a child to the element passed in to the function.
*/
function markGrid(markValue,grid){
  var headerObject = document.createElement("H1");
  headerObject.appendChild(document.createTextNode(markValue));

  headerObject.style.fontSize = "500%";
  
  grid.appendChild(headerObject);
}

function resetRound(){
  this.roundNum += 1;
  
  for(var i = 0; i < 3; i++){
    for(var y = 0; y < 3; y++){
      document.getElementsByName(i.toString()+","+y.toString())[0].innerHTML = "";
    }
  }
  
  if(this.roundNum <= this.numOfRounds){
     startGame();
     
  }
}
function setRounds(rounds){
  if(rounds !== null){
    this.numOfRounds = rounds;
  }
}
