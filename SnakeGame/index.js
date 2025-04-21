const gamegrid = document.querySelector(".game-grid");
const game_GRID = 21;
let currentIndex = 10 * game_GRID + 10;
let dx = 1;  // Initial direction: right
let dy = 0;
let lastTime = 0;
let mouseIndex = 0;

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
function createMouse(){
  const allCells = document.querySelectorAll(".game-grid > div");
  allCells[mouseIndex].classList.remove(  "mouse-box");
   mouseIndex = Math.floor( Math.random() * game_GRID * game_GRID)
  allCells[mouseIndex].classList.add("mouse-box");
}
console.log(mouseIndex)

function createSnake(timestamp) {
  requestAnimationFrame(createSnake);
  if (timestamp - lastTime < interval) return;
  lastTime = timestamp;

  const allCells = document.querySelectorAll(".game-grid > div");

  // Remove current snake position

  allCells[currentIndex].classList.remove("snake-box");

  // Update position based on direction
  currentIndex += dx + (dy * game_GRID);

  // Handle grid wrapping
  if (currentIndex < 0) currentIndex += game_GRID * game_GRID;
  if (currentIndex >= game_GRID * game_GRID) currentIndex -= game_GRID * game_GRID;
  if(mouseIndex===currentIndex){
    createMouse()
  }

  // Add new snake position

  allCells[currentIndex].classList.add("snake-box");

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