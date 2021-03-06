
function maxMovesMade() {
  if(this.numberOfMoves >= 9){
    return true;
  }
  return false;
}

/*
 * Traverses all possible combinations to see if there is a winning pattern in table
 */
function calcWinner() {

    if(maxMovesMade()){
        roundWon(true);
        return true;
    } else if (getGridValue(0, 0) == getGridValue(0, 1) && getGridValue(0, 1) == getGridValue(0, 2) && getGridValue(0, 0) !== null) {
        // Checks top row horizontally
        roundWon(false);
        return true;
    } else if (getGridValue(0, 0) == getGridValue(1, 0) && getGridValue(1, 0) == getGridValue(2, 0) && getGridValue(0, 0) !== null) {
        // Checks first left column
        roundWon(false);
        return true;
    } else if (getGridValue(0, 1) == getGridValue(1, 1) && getGridValue(1, 1) == getGridValue(2, 1) && getGridValue(0, 1) !== null) {
      //Checks middle column vertically
        roundWon(false);
        return true;
    } else if (getGridValue(0, 2) == getGridValue(1, 2) && getGridValue(1, 2) == getGridValue(2, 2) && getGridValue(0, 2) !== null) {
      // Checks far right column vertically
        roundWon(false);
        return true;
    } else if (getGridValue(2, 0) == getGridValue(2, 1) && getGridValue(2, 1) == getGridValue(2, 2) && getGridValue(2, 0) !== null) {
        // Checks middle row horizontally
        roundWon(false);
        return true;
    } else if (getGridValue(0, 0) == getGridValue(1, 1) && getGridValue(1, 1) == getGridValue(2, 2) && getGridValue(0, 0) !== null) {
        // Checks across, top left to bottom right
        roundWon(false);
        return true;
    } else if (getGridValue(0, 2) == getGridValue(1, 1) && getGridValue(1, 1) == getGridValue(2, 0) && getGridValue(0, 2) !== null) {
        // Checks across, top right to bottom left
        roundWon(false);
        return true;
    } else {
        return false;
    }
}

/*
 * Returns the value of the tile depedning on the grid cordinates given. Uses logical array table.
 */
function getGridValue(x, y) {
    try {
        return (logicalTable[x])[y].childNodes[0].innerHTML;
    } catch (e) {
        return null;
    }
}

/*
 * Calculates who has won and displays a winning message
 */
function updateScore() {
    if (playerOTurn) {
        displayFeedbackBox("X wins this round!");
        this.xScore += 1;
    } else {
        displayFeedbackBox("O wins this round!");
       this.oScore += 1;
    }
}

function roundWon(isDraw){
    if(!isDraw){
      updateScore();
    }
    this.roundNum += 1;
}