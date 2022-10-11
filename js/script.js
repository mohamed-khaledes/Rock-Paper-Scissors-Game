let rules = document.querySelector(".rules");
let rulesContent = document.querySelector(".rules-content");
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".close");
let imgGame = document.querySelectorAll(".img-game");
let contentGame = document.querySelector(".content-game");
let contentGame2 = document.querySelector(".content-game2");
let youPicked = document.querySelector(".you-picked");
let housePicked = document.querySelector(".house-picked");
let paper = document.querySelector(".paper");
let rock = document.querySelector(".rock");
let scissors = document.querySelector(".scissors");
let centerBox = document.querySelector(".center-box");
let headOfLoseWin = document.querySelector(".loseORwin");
let playAgain = document.querySelector(".play-again");
let score = document.querySelector(".score-value");
let lottiePlayer = document.querySelector('lottie-player');
// function to display rules
function displayRules() {
  rules.addEventListener("click", () => {
    overlay.classList.add("display");
    rulesContent.classList.add("display");
  });
  function closeRules() {
    close.addEventListener("click", () => {
      overlay.classList.remove("display");
      rulesContent.classList.remove("display");
    });
  }
  closeRules();
}
displayRules();
// function for game and display the next step of game
function game() {
  imgGame.forEach((img) => {
    img.addEventListener("click", function (e) {
      function YourTarget() {
        // your target and display the other page to show are you win or lose
        if (e.target.classList[1] === "img-game") {
          let yourClick1 = e.target.classList[0];
          console.log(yourClick1);
          let imgTarget = e.target.children[0];
          // function to show the other page
          function YouPicked() {
            contentGame.classList.add("hide");
            contentGame2.classList.add("displayO");
            youPicked.children[0].src = imgTarget.src;
          }
          YouPicked();
          // function to get the random img to you and specific are you lose or win
          function YourLuck() {
            arr = [paper, rock, scissors];
            let filterArr = arr.filter(function (e) {
              if (yourClick1 == "paper") {
                return e !== paper;
              } else if (yourClick1 == "rock") {
                return e !== rock;
              } else if (yourClick1 == "scissors") {
                return e !== scissors;
              }
            });
            // function to get the random number from array
            function getRandomNum(max) {
              return Math.floor(Math.random() * max);
            }
            let randomFilterArr = filterArr[getRandomNum(2)];
            let randomImg = randomFilterArr.children[0].src;
            housePicked.children[0].src = randomImg;
            console.log(randomFilterArr.classList[0]);
            // specific are you lose or win
            function probability() {
              let yourState = "";
              if (
                yourClick1 == "paper" &&
                randomFilterArr.classList[0] === "rock"
              ) {
                yourState = "win";
              } else if (
                yourClick1 == "paper" &&
                randomFilterArr.classList[0] === "scissors"
              ) {
                yourState = "lose";
              } else if (
                yourClick1 == "rock" &&
                randomFilterArr.classList[0] === "paper"
              ) {
                yourState = "lose";
              } else if (
                yourClick1 == "rock" &&
                randomFilterArr.classList[0] === "scissors"
              ) {
                yourState = "win";
              } else if (
                yourClick1 == "scissors" &&
                randomFilterArr.classList[0] === "paper"
              ) {
                yourState = "win";
              } else if (
                yourClick1 == "scissors" &&
                randomFilterArr.classList[0] === "rock"
              ) {
                yourState = "lose";
              }
              function loseORwin() {
                headOfLoseWin.innerHTML = `you ${yourState}`;
                if(headOfLoseWin.innerHTML === 'you lose'){
                    lottiePlayer.style.display = 'none'
                }else{
                    lottiePlayer.style.display = 'block'
                }
              }
              loseORwin();
            }
            probability();
            housePicked.classList.add("picked-animation");
            centerBox.classList.add("picked-animation");
          }
          YourLuck();
        }else if (e.target.classList[1] !== "img-game") {
            let yourClick2 = e.target.parentElement.classList[0];
            let imgTarget2 = e.target;
            function YouPicked() {
              contentGame.classList.add("hide");
              contentGame2.classList.add("displayO");
              youPicked.children[0].src = imgTarget2.src;
            }
            YouPicked();
            function YourLuck() {
              let arr = [paper, rock, scissors];
              let filterArr = arr.filter(function (e) {
                if (yourClick2 == "paper") {
                  return e !== paper;
                } else if (yourClick2 == "rock") {
                  return e !== rock;
                } else if (yourClick2 == "scissors") {
                  return e !== scissors;
                }
              });
              function getRandomNum(max) {
                return Math.floor(Math.random() * max);
              }
              let randomFilterArr = filterArr[getRandomNum(2)];
              let randomImg = randomFilterArr.children[0].src;
              housePicked.children[0].src = randomImg;
              // specific are you lose or win
              function probability() {
                let yourState = "";
                if (
                  yourClick2 == "paper" &&
                  randomFilterArr.classList[0] === "rock"
                ) {
                  yourState = "win";
                } else if (
                  yourClick2 == "paper" &&
                  randomFilterArr.classList[0] === "scissors"
                ) {
                  yourState = "lose";
                } else if (
                  yourClick2 == "rock" &&
                  randomFilterArr.classList[0] === "paper"
                ) {
                  yourState = "lose";
                } else if (
                  yourClick2 == "rock" &&
                  randomFilterArr.classList[0] === "scissors"
                ) {
                  yourState = "win";
                } else if (
                  yourClick2 == "scissors" &&
                  randomFilterArr.classList[0] === "paper"
                ) {
                  yourState = "win";
                } else if (
                  yourClick2 == "scissors" &&
                  randomFilterArr.classList[0] === "rock"
                ) {
                  yourState = "lose";
                }
                function loseORwin() {
                  headOfLoseWin.innerHTML = `you ${yourState}`;
                  if(headOfLoseWin.innerHTML === 'you lose'){
                      lottiePlayer.style.display = 'none'
                  }else{
                      lottiePlayer.style.display = 'block'
                  }
                }
                loseORwin();
              }
              probability();
              housePicked.classList.add("picked-animation");
              centerBox.classList.add("picked-animation");
            }
            YourLuck();
          }
      }
      YourTarget();
    });
  });
}
game();

// code for play again 
let countScore = 0;
function playagain() {
  playAgain.addEventListener("click", () => {
    if (headOfLoseWin.innerHTML === "you win") {
      countScore += 1;
      score.innerHTML = countScore;
    }
    contentGame.classList.remove("hide");
    contentGame2.classList.remove("displayO");
    housePicked.classList.remove("picked-animation");
    centerBox.classList.remove("picked-animation");
  });
}
playagain();