
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let computerinput = "";
let playerinput = "";
let randomNumber;
let rockClicked = false;
let paperClicked = false;
let scissorsClicked = false;
const removal = document.getElementById('stuff');
const hide = document.getElementById("btn");
let playerpoints=0;
let computerpoints=0;


rock.addEventListener('click', function handleClick() {
  rockClicked = true;
  playerinput = rock;
  playGame();
});
paper.addEventListener('click', function handleClick() {
  paperClicked = true;
  playerinput = paper;
  playGame();
});
scissors.addEventListener('click', function handleClick() {
  scissorsClicked = true;
  playerinput = scissors;
  playGame();
});
function playGame(){
  if(rockClicked){
    document.getElementById("userinput").src="Screenshot 2022-04-07 114927.png";
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
      case 0:
      document.getElementById("computerinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
      computerinput = scissors;
      break;
      case 1:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114914.png";
      computerinput = paper;
      break;
      case 2:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114927.png";
      computerinput = rock;
      break;
    }
  }else if(paperClicked){
    document.getElementById("userinput").src="Screenshot 2022-04-07 114914.png";
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
      case 0:
      document.getElementById("computerinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
      computerinput = scissors;
      break;
      case 1:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114914.png";
      computerinput = paper;
      break;
      case 2:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114927.png";
      computerinput = rock;
      break;
    }
  }else if(scissorsClicked){
    document.getElementById("userinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
      case 0:
      document.getElementById("computerinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
      computerinput = scissors;
      break;
      case 1:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114914.png";
      computerinput = paper;
      break;
      case 2:
      document.getElementById("computerinput").src="Screenshot 2022-04-07 114927.png";
      computerinput = rock;
      break;
    }
  }
  if(computerinput === playerinput){
    document.getElementById("result").innerHTML="You tied";
  }else{
    if(computerinput === rock &&  playerinput === paper){
      document.getElementById("result").innerHTML="You win";
      playerpoints = 1 + playerpoints;
      document.getElementById("p-points").innerHTML = playerpoints;
    }else if(computerinput === paper &&  playerinput === rock){
      document.getElementById("result").innerHTML="You lose";
      computerpoints = 1 + computerpoints;
      document.getElementById("c-points").innerHTML = computerpoints;
    }else if(computerinput === rock &&  playerinput === scissors){
      document.getElementById("result").innerHTML="You lose";
      computerpoints = 1 + computerpoints;
      document.getElementById("c-points").innerHTML = computerpoints;
    }else if(computerinput === scissors &&  playerinput === rock){
      document.getElementById("result").innerHTML="You win";
      playerpoints = 1 + playerpoints;
      document.getElementById("p-points").innerHTML = playerpoints;
    }else if(computerinput === paper &&  playerinput === scissors){
      document.getElementById("result").innerHTML="You win";
      playerpoints = 1 + playerpoints;
      document.getElementById("p-points").innerHTML = playerpoints;
    }else if(computerinput === scissors &&  playerinput === paper){
      document.getElementById("result").innerHTML="You lose";
      computerpoints++;
      document.getElementById("c-points").innerHTML = computerpoints;
    }
  }
}
function reset(){
  if(document.getElementById("p-points").innerHTML==11 || document.getElementById("c-points").innerHTML ==11){
    document.getElementById("p-points").innerHTML = 0;
    document.getElementById("c-points").innerHTML = 0;
  }
  rockClicked = false;
  scissorsClicked = false;
  paperClicked = false;
}
