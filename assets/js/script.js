const quizSelectOpt = document.getElementById("gameOptions");
const categoryOpt = document.getElementById("category");
const difficultyOpt = document.getElementById("difficultySelect");
const questionAmount = document.getElementById("quantityQuestion");
const submitQuiz = document.getElementById("submitOptions");
const remove = document.getElementById("remove");
const options = document.querySelectorAll(".answer-options"); 
const question = document.querySelector("#question"); 
// let correctScore = document.getElementById("correct")
// let incorrectScore = document.getElementById("incorrect")
// let scores = document.getElementsByClassName("score-area")
let scoreCard = document.getElementById("score-card")
let api_link = "https://opentdb.com/";
let quantity;
let difficulty;
let gameOption;
let questions = [];
let formattedQuestion;
let availableQuestions = [];
let count = 0;
let loadedQuestions;

options.forEach(function (option) {
  option.addEventListener("click", checkAnswer);
});


submitQuiz.addEventListener("click", function () {
  quizSelectOpt.classList.add("d-none");
  remove.classList.add("d-none"); 
  game.classList.remove("d-none");
  document.getElementById("remove").style.display = "none";
  gameOption = categoryOpt.value;
  difficulty = difficultyOpt.value;
  quantity = questionAmount.value;
  getQuestions(gameOption, difficulty, quantity);
});
function getQuestions(gameOption, difficulty, quantity) {
  fetch(
    `${api_link}api.php?amount=${quantity}&category=${gameOption}&difficulty=${difficulty}&type=multiple`
  )
    .then(response => response.json())
    .then(loadedQuestion => {
      questions = loadedQuestion.results.map(loadedQuestion => {
        formattedQuestion = {
          question: loadedQuestion.question,
        };
      });

      loadedQuestions = loadedQuestion.results;
      console.log(loadedQuestions);

      displayNextQuestion();
    });
}
function displayNextQuestion() {
  // console.log("error here", loadedQuestions);
  // const correctAnswer = loadedQuestions[count].correct_answer;
  let answerSelection = [
    ...loadedQuestions[count].incorrect_answers,
    loadedQuestions[count].correct_answer,
  ];

  let shuffledAnswers = shuffle(answerSelection);

  question.innerHTML = `Question: ${loadedQuestions[count].question}`;
  options.forEach(function (option, index) {
    option.innerHTML = shuffledAnswers[index];
  });
}
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function checkAnswer() {
  if (this.innerHTML === loadedQuestions[count].correct_answer) {
    
    alert("correct");
    
    incrementScore()
  } else {
    alert(`${this.innerHTML} was incorrect. ${loadedQuestions[count].correct_answer} was the answer`);
    incrementWrongAnswer()
  }
  getNextQuestion();
}


function getNextQuestion() {
  count++;
  console.log("count**", count);
  if (count < loadedQuestions.length) {
    displayNextQuestion(loadedQuestions);
  } else {
   
    console.log(scoreCard)
    // scoreCard.classList.add("d-none");
    
    scoreCard.style.display = "none";
    // document.getElementsById("incorrect").style.display = "none";
    // document.getElementsByTagName("p").style.display = "none";
    // correctScore.classList.add("d-none"); 
    let incorrectScore = parseInt(document.getElementById("incorrect").innerText)
    let correctScore = parseInt(document.getElementById("correct").innerText);
    alert(`Final Score: Correct:${correctScore} Incorrect: ${incorrectScore}`);
    
    
    // document.getElementsByClassName("score-area").style.display = "none";
    window.location = "../index.html/";
  }
}
function incrementScore(){
  //correct score count
  let oldScore = parseInt(document.getElementById("correct").innerText);
document.getElementById("correct").innerHTML = ++oldScore

}
function incrementWrongAnswer(){
  //incorrect score count
  let oldScore = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerHTML = ++oldScore

}


