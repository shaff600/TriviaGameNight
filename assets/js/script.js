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
let questionCounter
let availableQuestions = []



//SUBMIT GAME OPTIONS
submitQuiz.addEventListener("click", function(){
  quizSelectOpt.classList.add("d-none");
  remove.classList.add("d-none");
  game.classList.remove("d-none");
  document.getElementById("remove").style.display = "none";
  gameOption = categoryOpt.value;
  difficulty = difficultyOpt.value;
  quantity = questionAmount.value;
  getQuestions(gameOption, difficulty, quantity) // this calls the API at the end of the submitQuiz click event function
})
//API REQUEST
function getQuestions(gameOption, difficulty, quantity){
fetch(`${api_link}api.php?amount=${quantity}&category=${gameOption}&difficulty=${difficulty}&type=multiple`)
.then(response => response.json())
.then(loadedQuestion => {
  console.log('**', loadedQuestion)
  questions = loadedQuestion.results.map(loadedQuestion =>{
  formattedQuestion = {
 question: loadedQuestion.question
};

})

displayQuestions(loadedQuestion);
// .catch(err => {
//   console.error(err)
//   }) 
})


}


// //FORMATTED QUESTIONS
// function formatQuestion(getQuestions, questions){
// const answerChoices = [... loadedQuestion.incorrect_answers]
// formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
// answerChoices.splice(formattedQuestion.answer -1,0,
//     loadedQuestion.correct_answer);
//     answerChoices.forEach((choice, index) => {
//     formattedQuestion["choice" + (index+1)] = choice;})
//     // console.log(formattedQuestion)
//     displayQuestions()
// }  
//DISPLAY QUESTIONS
function displayQuestions(loadedQuestion){

console.log(loadedQuestion)
console.log(loadedQuestion.results[0].correct_answer)
      let answerSelection = [...loadedQuestion.results[0].incorrect_answers, loadedQuestion.results[0].correct_answer] 
     let  shuffledAnswers = shuffle(answerSelection) 
      console.log(answerSelection)
     document.querySelector("#question").innerHTML = `Question: ${loadedQuestion.results[0].question}`;
     document.querySelector("#q1").innerHTML = answerSelection[0];
     document.querySelector("#q2").innerHTML = answerSelection[1];
     document.querySelector("#q3").innerHTML = answerSelection[2];
     document.querySelector("#q4").innerHTML = answerSelection[3];
    const userSelection = document.getElementsByClassName('answer-options')
    var nodeList = document.querySelectorAll("p");
    const childUserSelection = userSelection.childNodes
    console.log(userSelection)
   
    for (let i = 0; i < userSelection.length; i++ ){
      userSelection[i].addEventListener("click", function(){

       console.log(this)
       if(this.innerHTML == loadedQuestion.results[0].correct_answer){
         alert("correct")
         console.log(loadedQuestion)
         document.querySelector("#question").innerHTML = `Question: ${loadedQuestion.results[0].question}`;
         
       }else{
         alert("incorrect")
       }
       
      }
      
      )
    }
    
  }




function loadQuestion(){
  for(let i = 0; i > loadedQuestion.question; i++){
    loadedQuestion[i].question
  }
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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