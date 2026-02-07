// Questions with answers
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "HyperText Markup Language", correct: true }
    ]
  },
  {
    question: "Which programming language runs in a web browser?",
    answers: [
      { text: "C++", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true }
    ]
  },
  {
    question: "What year was JavaScript created?",
    answers: [
      { text: "1995", correct: true },
      { text: "2005", correct: false },
      { text: "2015", correct: false }
    ]
  }
];

// DOM elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

// Start button click → begins quiz
startButton.addEventListener("click", startQuiz);

// Next button click → move to next question or show result
nextButton.addEventListener("click", () => {
  if (nextButton.innerText === "Play Again") {
    startQuiz(); // Restart quiz
    return;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

// Start quiz: reset everything
function startQuiz() {
  startButton.style.display = "none"; // Hide start button
  currentQuestionIndex = 0;
  score = 0;
  resultElement.innerText = ""; // Clear old result
  nextButton.innerText = "Next"; // Reset button text
  showQuestion();
}

// Show current question
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  // Create answer buttons dynamically
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

// Clear previous buttons
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Handle answer click
function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  }
  nextButton.style.display = "block"; // Show next button
}

// Show quiz result
function showResult() {
  resetState();
  questionElement.innerText = "Quiz Completed!";
  resultElement.innerText = `You scored ${score} out of ${questions.length}`;
  nextButton.innerText = "Play Again"; // Change button text
  nextButton.style.display = "block";
}

// Show start button initially
startButton.style.display = "block";
