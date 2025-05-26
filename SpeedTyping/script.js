const providedText = document.getElementById("Text");
const inputText = document.getElementById("inputText");
const seconds = Math.floor(Date.now() / 1000);
console.log(seconds);

const timestamp = seconds;
const date = new Date(timestamp * 1000);
console.log(date);

// console.log(time)
// Wrap each character of the provided text in a span
const originalText = providedText.innerText;
providedText.innerHTML = originalText.split('').map((c,i) =>{
      // console.log(c,i)
  return `<span>${c}</span>`}).join('');


let i = 0;

inputText.addEventListener("keydown", (e) => {
   const letter = e.key;
   const other = e.key.toUpperCase();

   if (other === "BACKSPACE") {
      if (i > 0) {
         i--;
         const chars = providedText.querySelectorAll('span');
         chars[i].style.backgroundColor = '';
      }
      return;
   }

   if (other === " ") {
      compareText(" ");
      return;
   }

   if (!/^[a-zA-Z]$/.test(letter)) {
      e.preventDefault();
      return;
   }

   compareText(letter);
});

function compareText(letter) {
   const chars = providedText.querySelectorAll('span');
   if (i >= chars.length) return;

   const currentChar = chars[i].textContent;

   if (currentChar === letter) {
      chars[i].style.backgroundColor = "lightgreen";
   } else {
      chars[i].style.backgroundColor = "salmon";
   }

   i++;
}
