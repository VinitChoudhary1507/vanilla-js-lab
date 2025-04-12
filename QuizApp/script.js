const quiz = document.querySelector(".quiz")
const btnstart = document.querySelector(".start")
const hide = document.querySelector(".hide")
const btns = document.querySelectorAll(".btn-option");
const container = document.querySelector(".container");
console.log(btnstart);
const Quiz = [
  {
    question: "what the age",

    answer: [
      { text: "this is 1", answer: false },
      { text: "this is 3", answer: true },
      { text: "this is 2", answer: false },
      { text: "this is 1", answer: false },

    ],
  },
  {
    question: "what the number",

    answer: [
      { text: "this is 4", answer: false },
      { text: "this is 5", answer: true },
      { text: "this is 2", answer: false },
      { text: "this is 1", answer: false },

    ],
  },
  {
    question: "what the fuck",

    answer: [
      { text: "this is 1", answer: false },
      { text: "this is 3", answer: true },
      { text: "this is 2", answer: false },
      { text: "this is 1", answer: false },

    ],
  },

]
btns.forEach(btn => btn.style.display = "none");


function check() {
  const l = Quiz.length - 1;
  console.log("inc",inc)
   
  if (inc > l) {
    quiz.innerHTML = "quiz complete";
    btns.forEach(btn => btn.style.display = "none");
    console.log("hello")
    return;
  }
 

    quiz.innerHTML = Quiz[inc].question;
    console.log(inc)
    btns.forEach((btn, i) => {
      const currentIndex = inc;
      console.log("currentIndex",currentIndex);

      btn.innerHTML = Quiz[currentIndex].answer[i].text;
      // btn.className = "btn-option";
      btn.classList.remove("right", "wrong");
      btn.onclick = () => {
        if (Quiz[currentIndex].answer[i].answer) {
          btn.classList.add("right")
          
        }
        
        else {
          btn.classList.add("wrong")
        }
        
        check();
      }
    });
  
  inc++;
}

btnstart.onclick=()=>{
  inc=0;
  btns.forEach(btn => btn.style.display = "block");
 hide.style.display="block"
  check();
}