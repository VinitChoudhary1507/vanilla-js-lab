const leftBat = document.querySelector('.left');
const rightBat = document.querySelector('.right');
const leftScore = document.querySelector('.lscore');
const  rightScore= document.querySelector('.rscore');
                                    // const bat = document.querySelector('.bat');
const ball = document.querySelector('.ball');
const batY = leftBat.clientHeight / 2;
const batX = leftBat.offsetTop;
                                    // console.log("sdas", batX)
const totalX = window.innerWidth
const totalY = window.innerHeight

let leftscore = 0;
let rightscore = 0;
let x = 30, y = 30;                 // Initial position
let dx = 4, dy = 4;                 // Speed
function resetBall() {
    x = totalX / 2;
    y = totalY / 2;
    dx = -dx;                        // Change direction after scoring
}
function updateBall() {
    x += dx;
    y += dy;
    
    if (x + ball.clientWidth >= totalX || x <= 0) {
        dx = -dx;                  // Reverse direction when hitting left/right walls
    }
    if (y + ball.clientHeight >= totalY || y <= 0) {
        dy = -dy;                    // Reverse direction when hitting top/bottom walls
    }
    if (x <= 0) {
        rightscore++;
        rightScore.textContent = rightscore;
        // dx= Math.abs(dx);
        resetBall()
    } 
     if (x + ball.clientWidth >= totalX) {
        leftscore++;
        leftScore.textContent = leftscore; 
    //    dx= -Math.abs(dx);
    resetBall()
    
    }

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    bounceBack()
    requestAnimationFrame(updateBall); 
}

requestAnimationFrame(updateBall)


function bounceBack() {
    // Use getBoundingClientRect() for accurate position measurements
    const ballRect = ball.getBoundingClientRect();

    const ballLeft = ballRect.left;
    const ballRight = ballRect.right;
    const ballTop = ballRect.top;
    const ballBottom = ballRect.bottom;

    // Left bat measurements
    const leftBatRect = leftBat.getBoundingClientRect();
    const leftBatTop = leftBatRect.top;
    const leftBatBottom = leftBatRect.bottom;
    const leftBatRight = leftBatRect.right;

    // Right bat measurements
    const rightBatRect = rightBat.getBoundingClientRect();
 const rightBatRight=   rightBatRect.right
    const rightBatTop = rightBatRect.top;
    const rightBatBottom = rightBatRect.bottom;
    const rightBatLeft = rightBatRect.left;

    
    if (dx < 0) {
        const isHorizontalOverlap = ballLeft <= leftBatRight && ballRight >= leftBatRect.left;
        const isVerticalOverlap = ballBottom > leftBatTop && ballTop < leftBatBottom;
        
        if (isHorizontalOverlap && isVerticalOverlap) {
            
            dx = -dx;
            return; // Prevent double collisions
        }
        
    }
    
    // Right bat collision (only when moving right)
    if (dx > 0) {
        const isHorizontalOverlap = ballRight >= rightBatLeft && ballLeft <= rightBatRight;
        const isVerticalOverlap = ballBottom > rightBatTop && ballTop < rightBatBottom;
        
        if (isHorizontalOverlap && isVerticalOverlap) {
            dx = -dx;
            return;
        }
        
    }
}

document.addEventListener("mousemove", (event) => {
    const verticalY = event.clientY;
    const currentX = event.pageX;
    const xPercent = (currentX / totalX) * 100;
    
    if (xPercent < 50) {
        leftBat.style.top = `${verticalY}` + "px";
    }
    else {
        rightBat.style.top = `${verticalY}` + "px";
    }
});
requestAnimationFrame((time) => {
    console.log("Time since page load (ms):", time);
  });

console.log(totalX)

// console.log("Checking right bat collision...");
// console.log("Horizontal Overlap:", isHorizontalOverlap);
// console.log("Vertical Overlap:", isVerticalOverlap);
// console.log("distance1", verticalY)
// console.log("Mouse X Coordinate:", event.pageX);

// console.log("Checking left bat collision...");
// console.log("Horizontal Overlap:", isHorizontalOverlap);
// console.log("Vertical Overlap:", isVerticalOverlap);