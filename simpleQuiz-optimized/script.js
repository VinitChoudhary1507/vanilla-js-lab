const btns = document.querySelector(".btn-container");
const questions = document.querySelector(".question");
console.log(questions);
const start = document.querySelector(".start");
const quizContainer = document.querySelector("#quiz-container");
const end = document.querySelector(".end");
const Quiz = [
  {
    question: "What does HTML stand for?",
    answer: [
      { text: "Hyper Text Markup Language", answer: true },
      { text: "Home Tool Markup Language", answer: false },
      { text: "Hyperlinks and Text Markup Language", answer: false },
      { text: "High Text Machine Language", answer: false },
    ],
  },
  {
    question: "Which language is primarily used for styling web pages?",
    answer: [
      { text: "JavaScript", answer: false },
      { text: "Python", answer: false },
      { text: "HTML", answer: false },
      { text: "CSS", answer: true },
    ],
  },
  {
    question: "Which of the following is a JavaScript framework?",
    answer: [
      { text: "Laravel", answer: false },
      { text: "React", answer: true },
      { text: "Django", answer: false },
      { text: "Flask", answer: false },
    ],
  },
];

let score = 0;
let currentQuestionIndex = 0;

start.addEventListener("click", (e) => {
  if (start.innerHTML === "Next") {
    currentQuestionIndex++;
    startQuiz();
  } else {
    start.style.display = "none";
    end.style.display = "inline-block";
    quizContainer.style.display = "block";
    startQuiz();
  }
});

function startQuiz() {
  resetState();
  if (currentQuestionIndex >= Quiz.length) {
    start.style.display = "none";
    end.style.display = "none";
    finalScore();
    return;
  }

  const index = currentQuestionIndex;
  questions.innerHTML = Quiz[index].question;

  Quiz[index].answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.dataset.correct = answer.answer;
    button.classList.add("answer");
    button.addEventListener("click", checkAnswer);
    btns.appendChild(button);
  });
}

function checkAnswer(e) {
  const correct = e.target.dataset.correct === "true";

  if (correct) {
    e.target.classList.add("right");
    start.style.display = "block";
    score++;
  } else {
    e.target.classList.add("wrong");
  }
  Array.from(btns.children).forEach((btn) => {
    btn.disabled = true; // ✅ added: disable all buttons after an answer is selected
    if (btn.dataset.correct === "true") {
      btn.classList.add("right"); // ✅ show correct answer after selection
    }
  });
  // const btnArray = Array.from(btns.children);
  start.innerHTML = "Next";
  start.style.display = "inline-block";
}

function resetState() {
  while (btns.firstChild) {
    btns.removeChild(btns.firstChild);
  }
  questions.innerHTML = "";
}
function finalScore() {
  resetState();
  questions.innerHTML = `you scored ${score} out of total ${Quiz.length}`;
}
end.addEventListener("click", () => {
  finalScore();
  start.style.display = "none";
  end.style.display = "none";
});
