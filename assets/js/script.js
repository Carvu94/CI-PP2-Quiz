let startButton = document.getElementById("start");
let homepageContainer = document.getElementById("homepage-container");
let categories = document.getElementById("category-pick");
let questionArea = document.getElementById("question-area");
let allergensCategory = document.getElementById("allergens");
let haccpCategory = document.getElementById("haccp");
let healthAndSafetyCategory = document.getElementById("health-and-safety");
let dietsCategory = document.getElementById("diets");
let quizHud = document.getElementById("hud");
const questionText = document.getElementById("question-text");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCount = document.getElementById("question-count");
const scoreCount = document.getElementById("score");
let nextQuestion = document.getElementById("next-question");
let feedback = document.getElementById("feedback");

// Wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function () {
  // JS code for modal window and close mostly taken from W3 Schools from: https://www.w3schools.com/howto/howto_css_modals.asp
  // Modal window opens when user selects 'About us' button
  let aboutUsModal = document.getElementById("about-us-modal");
  let aboutUsButton = document.getElementById("info-button");
  let closeButton = document.getElementsByClassName("close")[0];

  aboutUsButton.addEventListener("click", function () {
    aboutUsModal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    aboutUsModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == aboutUsModal) {
      aboutUsModal.style.display = "none";
    }
  });

  // When user selects 'Start the Quiz' categories will be listed
  startButton.addEventListener("click", function () {
    homepageContainer.style.display = "none";
    categories.style.display = "block";
  });

  // When user select the Allergens category the quiz will start with Allergens questions
  allergensCategory.addEventListener("click", function () {
    categories.style.display = "none";
    questionArea.style.display = "block";
    quizHud.style.display = "flex";
    startAllergensQuiz();
  });

  // When user select the HACCP category the quiz will start with HACCP questions
  haccpCategory.addEventListener("click", function () {
    categories.style.display = "none";
    questionArea.style.display = "block";
    quizHud.style.display = "flex";
    startHaccpQuiz();
  });

  // When user select the Health & Safety category the quiz will start with Health & Safety questions
  healthAndSafetyCategory.addEventListener("click", function () {
    categories.style.display = "none";
    questionArea.style.display = "block";
    quizHud.style.display = "flex";
    startHealthAndSafetyQuiz();
  });

  // When user select the Diets category the quiz will start with Diets questions
  dietsCategory.addEventListener("click", function () {
    categories.style.display = "none";
    questionArea.style.display = "block";
    quizHud.style.display = "flex";
    startDietsQuiz();
  });
})

// Create random numbers for the quiz to shuffle the questions

// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let ranNums = [];
// let i = nums.length;
// let j = 0;

// while (i--) {
//   j = Math.floor(Math.random() * (i + 1));
//   ranNums.push(nums[j]);
//   nums.splice(j, 1);
// }

// let currentQuestionIndex = ranNums[0];
// let x = 1;

// let currentQuestion = {};
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Start allegens quiz
function startAllergensQuiz() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...allergensQuestions];
    getNewQuestion();
};

// Start Haccp quiz
function startHaccpQuiz() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...haccpQuestions];
  getNewQuestion();
};

// Start Health & Safety Quiz
function startHealthAndSafetyQuiz() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...healthAndSafetyQuestions];
  getNewQuestion();
};

// Start Diets Quiz
function startDietsQuiz() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...dietsQuestions];
  getNewQuestion();
};

// Getting new question
function getNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // go to end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    questionCount.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionText.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion["choice"+number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        // check if answer is correct, show next question button and give feedback
        if (selectedAnswer == currentQuestion.answer) {
          incrementScore(CORRECT_BONUS);
          feedback.innerText = "Correct!"
          nextQuestion.style.display = "block";
          feedback.style.display = "block";
        } else {
          feedback.innerText = `Nope! The answer was ${currentQuestion.correct}`;
          nextQuestion.style.display = "block";
          feedback.style.display = "block";
        }
        // getNewQuestion();
    });
});

// Event listener for Next Question button
nextQuestion.addEventListener("click", function() {
  getNewQuestion();
  nextQuestion.style.display = "none";
  feedback.style.display = "none";
});

// Increment score function
function incrementScore (number) {
  score += number;
  scoreCount.innerText = score;
};
