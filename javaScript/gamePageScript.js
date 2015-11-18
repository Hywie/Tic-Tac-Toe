/*
 * Set of global variables.
 */
var logicalTable = new Array(3);
var playerOTurn = true;
var gameStarted = false;
var numOfRounds = 1;
var roundNum = 1;

var oScore = 0;
var xScore = 0;

/*
 * Attaches functon to run on page load.
 * Listens for the passed message, contains the number of rounds, and sets it to the global variable.
 */
window.onload = function () {

    createLogicalGrid();

    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            setRounds(request.rounds);
        }
    );

    startGame();
};

/*
 * Constructs a multi-dimensional array referencing DOM elements of the table to be used as the gird for the game.
 */
function createLogicalGrid() {

    for (var i = 0; i < 3; i++) { // i is the column number
        var row = new Array(3); // Temp row array to be stored in Global Array
        for (var y = 0; y < 3; y++) {
            row[y] = document.getElementsByName(i.toString() + "," + y.toString())[0];
            row[y].addEventListener("click", tileClicked, false); // Allows app to detect changes when a grid is changed.
            if (y > 0) {
                row[y].style.borderLeft = "1px solid white";
            }
            if (i < 2) {
                row[y].style.borderBottom = "1px solid white";
            }
        }
        this.logicalTable[i] = row;
    }
}

/*
 * Called when the play button is pressed.
 * Intialises essential variables
 */
function startGame() {
    this.gameStarted = true; // Set boolean to alert game has started
    displayMessage(document.getElementById("feedbackArea"), "Round: "+this.roundNum);
}

/*
 * Generic function to allow feedback to be given in text form through the banner.
 */
function displayMessage(areaToAppendTo, messageToDisplay) {
    removeChildNodes(areaToAppendTo);
    var headerObject = document.createElement("H1");
    headerObject.appendChild(document.createTextNode(messageToDisplay));
    areaToAppendTo.appendChild(headerObject);
}

/*
 * Called on the event of a tile in the table being clicked.
 * calls functions to see if their is a winner and gives feedback.
 */
function tileClicked() {
    if (gameStarted && this.innerHTML === "") {

        if (playerOTurn) {
            markGrid("O", this);
            playerOTurn = !playerOTurn;
        } else {
            markGrid("X", this);
            playerOTurn = !playerOTurn;
        }
    
        if (calcWinner()) {
            gameStarted = false;
            clearTable();

            if (roundNum > numOfRounds) {
                if(oScore > xScore){
                    displayMessage(document.getElementById("feedbackArea"),"Player O wins!");
                } else if(oScore < xScore){
                    displayMessage(document.getElementById("feedbackArea"),"Player X wins!");
                } else{
                    displayMessage(document.getElementById("feedbackArea"),"It's a draw!");
                }
            } else{
                startGame();
            }
        }
    }
}

/*
 * Removes all child nodes in the feedback div to allow more text to be overwritten.
 */
function removeChildNodes(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
}

/*
 * Adds a header element as a child to the element passed in to the function.
 */
function markGrid(markValue, grid) {
    var headerObject = document.createElement("H1");
    headerObject.appendChild(document.createTextNode(markValue));

    headerObject.style.fontSize = "500%";
    grid.appendChild(headerObject);
}

function clearTable() {
    for (var i = 0; i < 3; i++) {
        for (var y = 0; y < 3; y++) {
            document.getElementsByName(i.toString() + "," + y.toString())[0].innerHTML = "";
        }
    }
}

function setRounds(rounds) {
    if (rounds !== null) {
        this.numOfRounds = rounds;
    }
}