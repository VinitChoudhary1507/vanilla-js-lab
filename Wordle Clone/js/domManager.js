import { BOARD, MAX_ATTEMPTS } from './constants.js';
import { checkGuess,startGame } from './gameLogic.js';

let currentRow = 0;
let currentCol = 0;

export function createBoard(word) {
    BOARD.innerHTML = '';
    BOARD.style.gridTemplateColumns = `repeat(${word.length}, 60px)`;
    
    for (let i = 0; i < MAX_ATTEMPTS; i++) {
        const row = document.createElement('div');
        row.className = 'rowDiv';
        
        for (let j = 0; j < word.length; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            row.appendChild(tile);
        }
        BOARD.appendChild(row);
    }
}

export function handleKeyPress(e) {
    const rowDivs = document.querySelectorAll('.rowDiv');
    const currentTiles = rowDivs[currentRow].querySelectorAll('.tile');

    if (e.key === 'Backspace') {
        if (currentCol > 0) currentTiles[--currentCol].textContent = '';
        return;
    }

   console.log("currentCol",currentCol)
   console.log("currentRow dom manager",currentRow)
    if (e.key === 'Enter' && currentCol === currentTiles.length) {
   
        const guess = Array.from(currentTiles).map(tile => tile.textContent);
        const { currentWord,result, isCorrect, hasMoreAttempts } = checkGuess(guess);
        // const { currentWord } = startGame(); 
        currentTiles.forEach((tile, i) => {
            tile.style.backgroundColor = result[i];
        });
    console.log("hasMoreAttempts",!hasMoreAttempts)
        if (isCorrect || !hasMoreAttempts) {
            setTimeout(() => {
                alert(isCorrect ? 'Congratulations!' : `Game Over! Word: ${currentWord}`);
                currentRow = 0;
                currentCol = 0;
                createBoard(startGame());
            }, 500);
        } else {
         
            currentRow++;
            currentCol = 0;
        }
        return;
    }

    if (currentCol < currentTiles.length && /^[a-zA-Z]$/.test(e.key)) {
        currentTiles[currentCol].textContent = e.key.toUpperCase();
        currentCol++;
    }
}