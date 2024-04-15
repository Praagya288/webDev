const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let uScore = 0 ;
let cScore = 0 ;

function showWinner(result , userChoice , compChoice) {
  if (result) {
    message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    message.style.backgroundColor = "green" ;
    uScore++ ;
    userScore.innerText = uScore ;
    
} else {
    message.innerText = "You lose";
    message.style.backgroundColor = "red" ;
    message.innerHTML = `You lose! ${compChoice} beats your ${userChoice}`;
    cScore++ ;  
    compScore.innerText = cScore ;
}
}



function drawgame() {
    message.innerHTML = "game draw";
    message.style.backgroundColor = "gray" ;
}

function getCompChoice() {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  console.log(randomIndex);
  return options[randomIndex];
}
function playGame(userChoice) {
  const compChoice = getCompChoice();
  console.log("userChoice : ", userChoice);
  console.log("compChoice : ", compChoice);

  if (userChoice === compChoice) {
    drawgame();
  }
  else{

      let result = true;
      
      if (userChoice === "rock") {
          result = compChoice === "scissor" ? true : false;
  } else if (userChoice === "paper") {
      result = compChoice === "rock" ? true : false;
    } else if (userChoice === "scissor") {
        result = compChoice === "paper" ? true : false;
    }
    
    const display = showWinner(result , userChoice , compChoice);
}

}


choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
