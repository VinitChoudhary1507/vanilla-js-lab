const computerSigns = document.querySelectorAll('.computer-sign');
const playerSigns = document.querySelectorAll('.player-sign');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const draw = document.querySelector('.draw');

let p = 0;
let c = 0;
Loop();
function Loop() {
    
    playerSigns.forEach(element => {
        element.addEventListener('click', () => {
            const psign=element.innerHTML
            console.log(`Player: ${psign}`);
            
            gameCalculation(psign);
        })
    }); 
}
function gameCalculation(psign) {
  
    const random =Math.round(Math.random()*2) 
    const sign = computerSigns[random]  
    let lsign = sign.innerHTML 
    console.log(`Computer: ${lsign}`);

    if(psign===lsign)  draw.textContent = "DRAW" ; 

    if(psign ==="✊"&&lsign==="✌️"||psign ==="✌️"&&lsign==="🤚"||psign ==="🤚"&&lsign==="✊"){console.log('player win') 
    p+=1;
    playerScore.textContent = `Player Score: ${p}`; 
     }else{
         c+=1;
        //  const node2 = document.textContent(`(${c})`);
         computerScore.textContent = `Computer Score: ${c}`;
    }
}









// console.log(computerScore)
// console.log(computerSigns)
// console.log(playerScore)
// for (let index = 0; index < 3; index++) {
//     const element2 = computerSigns[index];
//     console.log(element2)
// }
// for (let index = 0; index < 3; index++) {
//     const element3 = playerSigns[index];
//     console.log(element3)
// } 