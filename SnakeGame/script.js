const gamegrid = document.querySelector(".game-grid");
const game_GRID = 21;
let snakeBody = [10 * game_GRID + 10]; // Array to track snake segments
let dx = 1;  // Initial direction: right
let dy = 0;
let lastTime = 0;
let mouseIndex = 0;
let score=0;
let gameOverFlag = false;
const fps = 10;
const interval = 1000 / fps;

createGrid();

function createGrid() {
    for (let i = 0; i < game_GRID * game_GRID; i++) {
        const cell = document.createElement("div");
        gamegrid.appendChild(cell);
    }
    createSnake();
    createMouse();
}

function createMouse() {
    const allCells = document.querySelectorAll(".game-grid > div");
    // Remove old mouse
    allCells[mouseIndex].classList.remove("mouse-box");
    // Generate new mouse position not on snake
    do {
        mouseIndex = Math.floor(Math.random() * game_GRID * game_GRID);
    } while (snakeBody.includes(mouseIndex));
    // Add new mouse
    allCells[mouseIndex].classList.add("mouse-box");
}

function createSnake(timestamp) {
    if (gameOverFlag) return; 
    requestAnimationFrame(createSnake);
    if (timestamp - lastTime < interval) return;
    lastTime = timestamp;

    const allCells = document.querySelectorAll(".game-grid > div");

    // Remove previous snake segments
    snakeBody.forEach(index => allCells[index].classList.remove("snake-box"));

    // Calculate new head position
    const head = snakeBody[0];
    let newHead = head + dx + (dy * game_GRID);
    // console.log(snakeBody);

    // Handle grid wrapping
    if (newHead < 0) newHead += game_GRID * game_GRID;
    if (newHead >= game_GRID * game_GRID) newHead -= game_GRID * game_GRID;
    const hi =snakeBody.includes(head);
    console.log(hi)
    // Check for mouse collision
    if (newHead === mouseIndex) {
        snakeBody.unshift(newHead); // Grow snake by keeping the tail
        score++;
        // console.log(score)
        document.querySelector(".number").innerHTML=`${score}`;
        createMouse();
    }
    else {
        snakeBody.unshift(newHead); // Move head
        snakeBody.pop(); // Remove tail
    }
    if (snakeBody.slice(1).includes(snakeBody[0])) {
        gameOver();
        return;
    }
    // Add new snake segments
    snakeBody.forEach(index => allCells[index].classList.add("snake-box"));

}
function resetGame() {
    // Reset game state
    snakeBody = [10 * game_GRID + 10];
    dx = 1;
    dy = 0;
    score = 0;
    document.querySelector(".number").textContent = score;
    gameOverFlag = false;

    // Clear grid
    const allCells = document.querySelectorAll(".game-grid > div");
    allCells.forEach(cell => {
        cell.classList.remove("snake-box", "mouse-box");
    });

    createMouse();
    lastTime = 0; // Reset timing
    requestAnimationFrame(createSnake); // Restart game loop
}
function gameOver() {
    gameOverFlag = true;
    alert(`Game Over! Score: ${score}`);
    resetGame();
}

document.addEventListener("keyup", (event) => {
    handleDirectionChange(event);
});

function handleDirectionChange(event) {
    switch (event.key) {
        case "ArrowUp":
            if (dy !== 1) { // Prevent reversing direction
                dx = 0;
                dy = -1;
            }
            break;
        case "ArrowDown":
            if (dy !== -1) {
                dx = 0;
                dy = 1;
            }
            break;
        case "ArrowLeft":
            if (dx !== 1) {
                dx = -1;
                dy = 0;
            }
            break;
        case "ArrowRight":
            if (dx !== -1) {
                dx = 1;
                dy = 0;
            }
            break;
    }
}