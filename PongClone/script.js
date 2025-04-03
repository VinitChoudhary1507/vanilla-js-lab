const leftBat = document.querySelector('.left');
const rightBat = document.querySelector('.right');
// const bat = document.querySelector('.bat');
const ball = document.querySelector('.ball');

const batY = leftBat.clientHeight/2;
const batX = leftBat.offsetTop;
console.log("sdas",batX)   
const totalX = window.innerWidth
const totalY = window.innerHeight


let x = 50, y = 50; // Initial position
let dx = 4, dy = 4;   // Speed
function updateBall() {
    x += dx;
    y += dy;
    
    
    if (x + ball.clientWidth >= totalX || x <= 0) {
        dx = -dx; // Reverse direction when hitting left/right walls
    }
    if (y + ball.clientHeight >= totalY || y <= 0) {
        dy = -dy; // Reverse direction when hitting top/bottom walls
    }


    // Apply new position
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
//    bounceBack(x,y)
bounceBack()
    requestAnimationFrame(updateBall); // Loop animation
}

requestAnimationFrame(updateBall); // Start animation

console.log(totalX)
// CHANGES REQUIRED IN THIS FUNCTION'
function bounceBack() {
    const ballLeft = x;
    const ballRight = x + ball.clientWidth;
    const ballTop = y;
    const ballBottom = y + ball.clientHeight;

    // Left bat collision check
    const leftBatTop = leftBat.offsetTop;
    const leftBatBottom = leftBatTop + leftBat.clientHeight;
    const leftBatRight = leftBat.offsetLeft + leftBat.clientWidth;

    // Right bat collision check
    const rightBatTop = rightBat.offsetTop;
    const rightBatBottom = rightBatTop + rightBat.clientHeight;
    const rightBatLeft = rightBat.offsetLeft;

    if (
        (ballLeft <= leftBatRight && ballTop >= leftBatTop && ballBottom <= leftBatBottom) ||
        (ballRight >= rightBatLeft && ballTop >= rightBatTop && ballBottom <= rightBatBottom)
    ) {
        dx = -dx; // Reverse the ball direction on collision
    }
}

document.addEventListener("mousemove", (event) => {
    console.log("Mouse X Coordinate:", event.pageX);
    const verticalY = event.clientY;
    const currentX = event.pageX;
    const xPercent = (currentX / totalX) * 100;

    if (xPercent < 50) {
        console.log("distance1",verticalY)


        // console.log(distance)
        leftBat.style.top = `${verticalY}` + "px";
        
    }
    else {
        
        // console.log("distance",verticalY)
        rightBat.style.top = `${verticalY}` + "px";
    }
    // bounceBack(verticalY)
});

