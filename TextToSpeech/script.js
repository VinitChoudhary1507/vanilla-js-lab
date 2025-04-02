const speakbtn = document.querySelector(".speak"); // Renamed for clarity
const textInsert = document.querySelector(".input"); // Renamed for clarity
const speed = document.querySelector(".speed")
const pause = document.querySelector(".pause")
const resume = document.querySelector(".resume")

if (textInsert) {
    
    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; // Set language
        utterance.rate = speed.value ||1; // Set speed (1 is normal)
        utterance.pitch = 1; // Set pitch (1 is normal)
        
        speechSynthesis.speak(utterance);
        pause.addEventListener("click",()=>{
            speechSynthesis.pause();
        })
        resume.addEventListener("click",()=>{
            speechSynthesis.resume();
        })
    };
    speakbtn.addEventListener("click",()=>{
        const inputText = textInsert.value;
        console.log(inputText);
        speak(inputText);
    })

} else {
    console.error("Element with class 'voices' not found.");
}

