/*

    FUNCTIONALITY

    handle the player change(x or o)
     handle cell played ->check to see if the clicked box is taken yet
        -if true => null
        -else => display output(x or o)
    handle the win condition/ result validation
    keep score
    handle restart game

    

*/

const statusDisplay = document.querySelector('.gameStatus');

//GAME START SETTINGS
let gameActive = true;
let currPlayer = 'X';
// let cell = document.querySelectorAll('.cell')
let gameState = [
    '', '', '', 
    '', '', '',
    '', '', '',
];

const xScore = document.getElementById('xScore');
const oScore = document.getElementById('oScore');
const catScore = document.getElementById('catScore');

let scoreObj = {
    x: 0,
    o: 0,
    c: 0
}

xScore.innerText = scoreObj.x;
oScore.innerText = scoreObj.o;
catScore.innerText = scoreObj.c;

const currPlayerTurn =()=> `It's ${currPlayer}'s turn`;

statusDisplay.innerText = currPlayerTurn();

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

//handle cell clicked
const handleCellClick =(clickedCellEvent)=> {
    //grab the clicked cell
    const clickedCell = clickedCellEvent.target;
    const clickedCellIdx = parseInt(clickedCell.getAttribute('data-cell-index'));
    //if the indexed item is not an empty string or if gameActive is false
    if(gameState[clickedCellIdx] !== '' || !gameActive) {
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIdx)
}

//handle cell played
const handleCellPlayed =(clickedCell, clickedCellIdx)=> {
    gameState[clickedCellIdx] = currPlayer;
    currPlayer == 'X' ? (clickedCell.style.color = 'rgb(100, 139, 113)' && (clickedCell.Style.backgroundColor = 'rgb(223, 188, 194') : (clickedCell.style.color = 'rgb(223, 188, 194') && (clickedCell.style.backgroundColor = 'rgb(100, 139, 113)');
    clickedCell.innerHTML = currPlayer;
}

//handle player change
const resultValidation=()=> {
    let roundWon = false;
    for(let i = 0; 1 <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState [winCondition[1]];
        let c = gameState [winCondition[2]];

        if(a == '' || b == '' || c == '' {
            continue;
        }
        
        if(a == b && b == c) {
            for(let 1 = 0; 1 < winCondition.length; 1++) {
                roundWon = true;
                break
            }
        })
    }
}
const playerChange=()=> {
    currPlayer = currPlayer == 'X' ? 'O' : 'X';
    statusDisplay.innerText = currPlayerTurn();
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));