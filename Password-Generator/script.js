const password = document.getElementById("password")
const lowerCase = document.getElementById("lowercase")
const upperCase = document.getElementById("uppercase")
const allSymbols = document.getElementById("symbols")
const allNumbers = document.getElementById("numbers")
const countNumber = document.getElementById("count")
const button = document.querySelector(".btn")

const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
document.addEventListener("change",(e)=>{
    const passwordLength=    countNumber.value
    if(passwordLength>20){
        password.value="!length should be less than 20";
        console.log("hi");
    }
    const check = passwordLength/4
    if(check % 2===0){
       let even = passwordLength/4;
       if(passwordLength<20){
           for (let index = 0; index < even ; index++) {
           const randoms=Math.floor(Math.random() * index);
           const randomcase = numbers[randoms]
           const randomcase2 = lowercaseAlphabet[randoms]
           const randomcase3 = uppercaseAlphabet[randoms]
           const randomcase4 = symbols[randoms]
           console.log(`${index}`,randomcase,randomcase2,randomcase3,randomcase4);
           console.log(randoms);
           
         }
    }
}
    if(check % 2!==0){
       let odd = (passwordLength/4)+1;
       if(passwordLength<20){
        for (let index = 0; index < odd ; index++) {
          const randoms=Math.floor(Math.random() * index);
        const randomcase = numbers[randoms]
        const randomcase2 = lowercaseAlphabet[randoms]
        const randomcase3 = uppercaseAlphabet[randoms]
        const randomcase4 = symbols[randoms]
        console.log(`${index}`,randomcase,randomcase2,randomcase3,randomcase4);
        console.log(randoms);
        
      }
    }}
 })
