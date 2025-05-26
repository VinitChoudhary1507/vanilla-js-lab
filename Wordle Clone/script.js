const board = document.querySelector('.board');

const wordleList = ['hype', 'game', 'code', 'lamp', 'wolf', 'snow', 'dust', 'mint', 'bake', 'jump'];
console.log(wordleList.length)
let rand = 0;
let currentRow = 0;
let currentCol = 0;
let gameEnded = false;
startGame();
function startGame() {
    rand = Math.floor(Math.random() * wordleList.length);
    textInput(rand)
}
function textInput(rand) {
    console.log(rand);
    const word = wordleList[rand];
    removeLastDiv();
    const WORD_LENGTH = word.split('').length
    console.log(WORD_LENGTH);
    board.style.gridTemplateColumns = `repeat(${word.length}, 60px)`;
    for (let row = 0; row < 5; row++) {

        const rowDiv = document.createElement('div');
        rowDiv.classList.add('rowDiv');

        for (let col = 0; col < WORD_LENGTH; col++) {

            let tile = document.createElement('div');
            tile.classList.add('tile');
            rowDiv.appendChild(tile);

        }
        board.appendChild(rowDiv)
    }
    console.log(board.children)
}
function removeLastDiv() {
    while (board.firstElementChild) {
        board.firstElementChild.remove();
    }
}
let count = 0;
document.addEventListener("keydown", (e) => {
    let letter = e.key.toUpperCase()
    console.log(letter)
    const currentRowDiv = document.querySelectorAll('.rowDiv')[currentRow]
    console.log("currentRowDiv", currentRowDiv)
    const tilesInRow = currentRowDiv.querySelectorAll('.tile') || [];
    console.log(tilesInRow)
    if (letter === 'BACKSPACE') {
        console.log("hello Backspace")
        for (let index = tilesInRow.length - 1; index >= 0; index--) {
            if (tilesInRow[index].innerHTML !== "") {

                tilesInRow[index].innerHTML = tilesInRow[index].textContent.slice(0, -1)
                currentCol--;
                console.log("helloempty", currentCol);
                break;
            }

        }
        return;
    }
    if (letter === 'ENTER' &&currentCol >= 4) {
        checkAnswer() 
      
        currentCol = 0;
        return;
    }
    if (currentCol >= 4) {return;}
    if (!/^[A-Z]$/.test(letter)) return;
    tilesInRow[currentCol].innerHTML = letter;
    let inputTexts = tilesInRow[currentCol].innerHTML;
    currentCol++

})
function checkAnswer() {
    const word = wordleList[rand].toUpperCase();
    const correctLetters = word.split('');
    console.log(correctLetters);
    
    const currentRowDiv = document.querySelectorAll('.rowDiv')[currentRow]
    const tilesInRow = currentRowDiv.querySelectorAll('.tile') || [];
    let guess =[]
    tilesInRow.forEach((box, index) => {
        const letter = box.innerHTML.toUpperCase();
        guess.push(letter)
        console.log(letter)
        if (box.innerHTML === '') { return }
        if (letter === correctLetters[index]) {
            box.style.backgroundColor = 'green'; // correct letter and position
        } else if (correctLetters.includes(letter)) {
            box.style.backgroundColor = 'gold'; // correct letter, wrong position
        } else {
            box.style.backgroundColor = 'grey'; // letter not in word
        }
    });
    if (currentRow < 4) {
        currentRow++;
        currentCol = 0;
    } else {
        // Handle game over
        setTimeout(() => {
            alert('Game Over! The word was: ' + word);
            currentRow = 0;
            currentCol = 0;
            startGame();
        }, 1000);
    }
    
    // Check win condition
    if (guess.join('') === word) {
        setTimeout(() => {
            alert('Congratulations! You won!');
            currentRow = 0;
            currentCol = 0;
            startGame();
        }, 500);
    }
}
