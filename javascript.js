
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let computerinput = "";
let randomNumber = Math.floor(Math.random()*3)
let rockClicked = false;
let paperClicked = false;
let scissorsClicked = false;
rock.addEventListener('click', function handleClick() {
  rockClicked = true;
  playGame();
});
paper.addEventListener('click', function handleClick() {
  paperClicked = true;
  playGame();
});
scissors.addEventListener('click', function handleClick() {
  scissorsClicked = true;
  playGame();
});
function playGame(){
  if(rockClicked){
    document.getElementById("userinput").src="http://clipart-library.com/img/1603206.png";
    switch(randomNumber){
      case 0:
      document.getElementById("computerinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
      computerinput = scissors;
      return;
      case 1:
      document.getElementById("computerinput").src="http://clipart-library.com/data_images/64750.jpg";
      computerinput = paper;
      return;
      case 2:
      document.getElementById("computerinput").src="http://clipart-library.com/img/1603206.png";
      computerinput = rock;
      return;
    }
  }
  if(paperClicked){
    document.getElementById("userinput").src="http://clipart-library.com/data_images/64750.jpg";
    switch(randomNumber){
      case 0:
      document.getElementById("computerinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
      computerinput = scissors;
      return;
      case 1:
      document.getElementById("computerinput").src="http://clipart-library.com/data_images/64750.jpg";
      computerinput = paper;
      return;
      case 2:
      document.getElementById("computerinput").src="http://clipart-library.com/img/1603206.png";
      computerinput = rock;
      return;
    }
  }
  if(scissorsClicked){
    document.getElementById("userinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
    switch(randomNumber){
      case 0:
      document.getElementById("computerinput").src="https://www.publicdomainpictures.net/pictures/200000/velka/scissors-silhouette-1479486040jCd.jpg";
      computerinput = scissors;
      return;
      case 1:
      document.getElementById("computerinput").src="http://clipart-library.com/data_images/64750.jpg";
      computerinput = paper;
      return;
      case 2:
      document.getElementById("computerinput").src="http://clipart-library.com/img/1603206.png";
      computerinput = rock;
      return;
    }
  }
}
