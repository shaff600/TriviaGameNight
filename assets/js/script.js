// querySelector, difficultySelect, categorySelect global variables
//current score variable - empty array
//available questions -empty array
const quizSelectOpt = document.getElementById("gameOptions");
const categoryOpt = document.getElementById("category");
const difficultyOpt = document.getElementById("difficultySelect");
const questionAmount = document.getElementById("quantityQuestion");
const submitQuiz = document.getElementById("submitOptions");
const remove = document.getElementById("remove");
let api_link = "https://opentdb.com/";
let quantity
let difficulty
let gameOption
let questions = []
let formattedQuestion



//submit game options
submitQuiz.addEventListener("click", function(){
  quizSelectOpt.classList.add("d-none");
  remove.classList.add("d-none");
  game.classList.remove("d-none");
  document.getElementById("remove").style.display = "none";
  gameOption = categoryOpt.value;
  difficulty = difficultyOpt.value;
  quantity = questionAmount.value;
  
  getData() 
})

//API request
function getData(){
console.log(quantity)
fetch(`${api_link}api.php?amount=${quantity}&category=${gameOption}&difficulty=${difficulty}&type=multiple`)
.then(response => response.json())
.then(loadedQuestion => {
console.log(loadedQuestion)
questions = loadedQuestion.results.map(loadedQuestion =>{
 formattedQuestion = {
    question: loadedQuestion.question
};
const answerChoices = [... loadedQuestion.incorrect_answers]
formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
answerChoices.splice(formattedQuestion.answer -1,0,
    loadedQuestion.correct_answer);
    answerChoices.forEach((choice, index) => {
    formattedQuestion["choice" + (index+1)] = choice;})
    
})  
    return document.querySelector("#question").innerHTML = `Question: ${loadedQuestion.results[0].question}`

;
    
})
.catch(err => {
console.error(err)
})
}
// submitQuiz.addEventListener('click', getData)
//collect questions from api 

//submit game options

//start game


//display correct/incorrect answer


//display next question


//end game



//increment correct answer
//increment incorrect answer
//progress bar