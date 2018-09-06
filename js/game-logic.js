// All code should be written in this file.
//Player One Variables

let playerOneMoveOneType = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveThreeType = undefined;

let playerOneMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeValue = undefined;


//Player Two Variables:

let playerTwoMoveOneType = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveThreeType = undefined;

let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeValue = undefined;

//other

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {

    if (!player || !moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
        return;
    }

    if (( moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return;
    }

    if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) {
        return;
    }

    if (moveOneType != ('rock' || 'paper' || 'scissors')) {
        return;
    }

    if (moveTwoType != ('rock' || 'paper' || 'scissors')) {
        return;
    }

    if (moveThreeType != ('rock' || 'paper' || 'scissors')) {
        return;
    }


    if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
    }
    else if (player === 'Player Two') {
        playerTwoMoveOneType = moveTypeOne;
        playerTwoMoveTwoType = moveTypeTwo;
        playerTwoMoveThreeType = moveTypeThree;
        playerTwoMoveOneValue = moveValueOne;
        playerTwoMoveTwoValue = moveValueTwo;
        playerTwoMoveThreeValue = moveValueThree;
    }
    else {
        console.log('there must be a player one or player two!');
    }
}    


const getRoundWinner = (round) => {
    
    let playerOneRoundType;
    let playerTwoRoundType;
    let playerOneRoundValue;
    let playerTwoRoundValue;

    if (round === 1) { //round 1

        playerOneRoundType = playerOneMoveOneType;
        playerTwoRoundType = playerTwoMoveOneType;
        playerOneRoundValue = playerOneMoveOneValue;
        playerTwoRoundValue = playerTwoMoveOneValue;
    }
    else if (round === 2) { //round 2
        playerOneRoundType = playerOneMoveTwoType;
        playerTwoRoundType = playerTwoMoveTwoType;
        playerOneRoundValue = playerOneMoveTwoValue;
        playerTwoRoundValue = playerTwoMoveTwoValue;
    }
    else if (round === 3) { //round 3
        playerOneRoundType = playerOneMoveThreeType;
        playerTwoRoundType = playerTwoMoveThreeType;
        playerOneRoundValue = playerOneMoveThreeValue;
        playerTwoRoundValue = playerTwoMoveThreeValue;
    }
    else {
        console.log('error');
    }

    if (playerOneRoundType === 'rock') { //player one chooses rock.
                if (playerTwoRoundType === 'rock') {
                    if (playerOneRoundValue > PlayerTwoRoundValue) {
                        return 'Player One';
                    }
                    else if (playerOneRoundValue < PlayerTwoRoundValue) {
                        return 'Player Two';
                    }
                    else {
                        return 'Tie';
                    }
                }
                else if (playerTwoRoundType === 'paper') {
                    return 'Player Two';
                    
                }
                else if (playerTwoRoundType === 'scissors') {
                    return 'Player One';
                }
            
    }
    else if (playerOneRoundType === 'paper') { //player one chooses paper.
        if (playerTwoRoundType === 'paper') {
            if (playerOneRoundValue > PlayerTwoRoundValue) {
                return 'Player One';
            }
            else if (playerOneRoundValue < PlayerTwoRoundValue) {
                return 'Player Two';
            }
            else {
                return 'Tie';
            }
        }
        else if (playerTwoRoundType === 'scissors') {
            return 'Player Two';
            
        }
        else if (playerTwoRoundType === 'rock') {
            return 'Player One';
        }
    }   
    else if (playerOneRoundType === 'scissors') { //player one chooses scissors.
        if (playerTwoRoundType === 'scissors') {
            if (playerOneRoundValue > PlayerTwoRoundValue) {
                return 'Player One';
            }
            else if (playerOneRoundValue < PlayerTwoRoundValue) {
                return 'Player Two';
            }
            else {
                return 'Tie';
            }
        }
        else if (playerTwoRoundType === 'rock') {
            return 'Player Two';
            
        }
        else if (playerTwoRoundType === 'paper') {
            return 'Player One';
        }
    }
    else {
        console.log('something is wrong!');
    } 
}

const getGameWinner = () => {

    let playerOneScore = 0;
    let playerTwoScore = 0;

    for (let i = 1; i <= 3; i++) {
        
        let roundWinner = getRoundWinner(i);
        
        if  (roundWinner === 'Player One') {
            playerOneScore += 1;
        }
        else if (roundWinner === 'Player Two') {
            playerTwoScore += 1;
        }
        else {
            console.log(`round ${i} is a tie`);
        }
    }

    if (playerOneScore > playerTwoScore) {
        return 'Player One';
    }
    else if (playerOneScore < playerTwoScore) {
        return 'Player Two';
    }
    else {
        return 'Tie';
    }
}

// const setComputerMoves = () => {

// }





