// querySelector, difficultySelect, categorySelect global variables
//current score variable - empty array
//available questions -empty array
const quizSelectOpt = document.getElementById("gameOptions");
const categoryOpt = document.getElementById("categorySelect");
const difficultyOpt = document.getElementById("difficultySelect");
const questionAmount = document.getElementById("quantityQuestion");
const submitQuiz = document.getElementById("submitOptions");




// function hideMenu() {
//   if (submitQuiz.style.display === "none") {
//     submitQuiz.style.display = "block";
//   } else {
//     submitQuiz.style.display = "none";
//   }
// }

// submitQuiz.addEventListener('click', () =>{

//     if(quizSelectOpt.style.display === 'none'){
//         quizSelectOpt.style.display = 'block';
//     }else{
//         quizSelectOpt.style.display === 'none'
//     }
// })

submitQuiz.addEventListener("click", function(){
  quizSelectOpt.classList.add("d-none");
  game.classList.remove("d-none")
})


// function myFunction() {
//   quizSelectOpt.classList.add("d-none");
// }

//API request


//collect questions from api 

//submit game options

//start game


//display correct/incorrect answer


//display next question


//end game



//increment correct answer
//increment incorrect answer
//progress bar