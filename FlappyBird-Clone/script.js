const bird = document.querySelector('.bird')
const wallTop = document.querySelector('.wallTop')
const wallBottom = document.querySelector('.wallBottom')
let x = 0;
let lastTime = 0;
const upperHeight = Math.abs(Math.random() * (window.innerHeight - 90));
const lowerHeight = window.innerHeight - upperHeight - 90;

const fps = 10;
const interval = 1000 / fps;
let wallX = -100; // Initial position off-screen to the right
const wallSpeed = 5; // Pixels per frame
wallMovement()

birdMovement()
function birdMovement() {

    document.addEventListener("keypress", (event) => {
        const birdPosition = bird.getBoundingClientRect();
        console.log(birdPosition)
        switch (event.key.toLowerCase()) {
            case 'w':
                bird.style.top = `${birdPosition.top - 22}px`;
                break;
            case 'a':
                bird.style.left = `${birdPosition.left - 22}px`;
                break;
            case 's':
                bird.style.top = `${birdPosition.top + 22}px`;
                break;
            case 'd':
                bird.style.left = `${birdPosition.left + 22}px`;
                break;
        }
        // gameOver()
    });
}

function wallMovement(timestamp) {
    if (!timestamp) {
        requestAnimationFrame(wallMovement);
        return;
    }

    if (timestamp - lastTime < interval) {
        requestAnimationFrame(wallMovement);
        return;
    }
    lastTime = timestamp;

    wallX += wallSpeed;
    let wallPositon = wallBottom.getBoundingClientRect();
    let left = wallPositon.left;
    // console.log(left)
    if (left < -50) {
        wallX = -100;
        wallTop.style.right = `${x}px`;
        wallBottom.style.right = `${x}px`;
    }

    wallTop.style.right = `${wallX}px`;
    wallBottom.style.right = `${wallX}px`;
    wallTop.style.height = `${upperHeight}px`;
    requestAnimationFrame(wallMovement)
    wallBottom.style.height = `${lowerHeight}px`;
    gameOver()

}

function gameOver() {
    let birdPosition = bird.getBoundingClientRect();
    let wallBottomPos = wallBottom.getBoundingClientRect();
    let wallTopPos = wallTop.getBoundingClientRect();

    // Collision with upper wall
    if (birdPosition.right > wallTopPos.left &&
        birdPosition.left < wallTopPos.right &&
        birdPosition.top < wallTopPos.bottom) {
        console.log("Game Over: Hit upper wall!");
        alert('Game Over: Hit upper wall!')
        restartGame(birdPosition, wallTopPos)
        return;
        // Trigger game over actions here
    }

    // Collision with lower wall
    if (birdPosition.right > wallBottomPos.left &&
        birdPosition.left < wallBottomPos.right &&
        birdPosition.bottom > wallBottomPos.top) {
        console.log("Game Over: Hit lower wall!");
        alert('Game Over: Hit lower wall!')
        restartGame()
        return;
        // Trigger game over actions here
    }

    // Collision with screen edges
    if (birdPosition.top < 0 || birdPosition.bottom > window.innerHeight) {
        console.log("Game Over: Out of bounds!");
        // Trigger game over actions here
    }
}

wallMovement();
function restartGame() {
    bird.style.top = '50%';
    bird.style.left = '50px';

    wallX = -100;
    upperHeight = Math.abs(Math.random() * (window.innerHeight - 90));
    lowerHeight = window.innerHeight - upperHeight - 90;

    wallTop.style.height = `${upperHeight}px`;
    wallBottom.style.height = `${lowerHeight}px`;
    wallTop.style.right = `${wallX}px`;
    wallBottom.style.right = `${wallX}px`;
}