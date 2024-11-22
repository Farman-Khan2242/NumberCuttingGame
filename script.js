function startGame() {
  window.location.href = "index1.html"; // Replace with the actual game screen link
}

//Animation
gsap.from("#Heading1",{
  x:-100,
  duration:1,
  opacity:0,
  delay:0.5,
  ease: "power2.out",  
})
gsap.from("main p",{
  y:-10,
  duration:1,
  opacity:0,
  delay:0.7,
  ease: "power2.out",  
})
gsap.to(".start-button",{
  opacity:1,
  duration:1,
  delay:0.5,
  ease: "power2.out",  
})
gsap.from("#footer1",{
  opacity:0,
  y:10,
  duration:1,
  delay:1.5,
  ease: "power2.out",  
})
//page 2
gsap.from(".container",{
  opacity:0,
  x:-100,
  duration:1,
  delay:0.4 ,
  ease: "power2.out",  
})
gsap.from("#chooseNumTitle",{
  opacity:0,
  y:-10,
  duration:1,
  delay:0.7,
  ease: "power2.out",  
})
gsap.from("label",{
  opacity:0,
  y:-50,
  duration:1,
  delay:0.3,
  stagger:0.2,
  ease: "bounce.out"  
})
gsap.from("input",{
  opacity:0,
  x:100 ,
  duration:1,
  delay:0.4,
  stagger:0.2,
  ease: "power2.0ut"  
})
gsap.from(".btn",{
  opacity:0,
  y:50,
  duration:1.5,
  delay:0.5,
  ease: "power2.out"  
})

gsap.from("#secondFooter",{
  opacity:0,
  y:10,
  duration:1,
  delay:1,
  ease: "power2.out",  
})








// DOM Elements
const playerForm = document.getElementById("player-form");
const startGameBtn = document.getElementById("start-game-btn");
const gameContainer = document.getElementById("game-container");
const numbersGrid = document.getElementById("numbers-grid");
const winnerMessage = document.getElementById("winner-message");
const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");
const restartBtn = document.getElementById("restart");
const headingH1 = document.querySelector(".heading");
const playersTurn = document.querySelector('#playersTurn')



let player1Number, player2Number;
let numbers = Array.from({ length: 30 }, (_, i) => i + 1);

// Form Validation and Game Start
startGameBtn.addEventListener("click", () => {
  player1Number = parseInt(player1Input.value, 10);
  player2Number = parseInt(player2Input.value, 10);

  if (
    !player1Number ||
    !player2Number ||
    player1Number < 1 ||
    player1Number > 30 ||
    player2Number < 1 ||
    player2Number > 30
  ) {
    alert("Both players must choose valid numbers between 1 and 30!");
    return;
  }

  if (player1Number === player2Number) {
    alert("Players cannot choose the same number!");
    return;
  }

  document.querySelector(".container").classList.add("hidden");
  gameContainer.classList.remove("hidden");
  renderNumbersGrid();
    //numbers animation
    gsap.from("#numbers-grid div",{
      opacity:0,
      y:50,
      duration:1,
      delay:0.5,
      stagger:0.01,
      ease: "power2.out"  
    })

    // players turn 
    gsap.from('#playersTurn',{
      opacity:0,
      x:-100,
      duration:1,
      delay:0.5,
      ease: "power2.out"  
    })

  //page2 section animation gsap
  gsap.from(".numbersContainer",{
    opacity:0,
    x:-30,
    duration:1,
    delay:0.3,
    ease: "power2.out",  
  })

  //page2 section 2
  gsap.from(".heading",{
    y:-30,
    duration:1.2,
    delay:0.4,
    ease: "power2.out"  
  })
});
// Render the Numbers Grid
function renderNumbersGrid() {
  numbersGrid.innerHTML = "";
  numbers.forEach((num) => {
    const numberBox = document.createElement("div");
    numberBox.className = "number-box";
    numberBox.textContent = num;
    numberBox.addEventListener("click", () => handleNumberClick(num));
    numbersGrid.appendChild(numberBox);
  });
}



let player = 2;
// Handle Number Click
function handleNumberClick(num) {
  if (num === player1Number) {
    winnerMessage.textContent = "Player 1 Wins!";
    headingH1.textContent = "Game Over!";
    endGame();

    //gameover title
    gsap.from(winnerMessage,{
      opacity:0,
      y:25,
      // scale:0.2,
      duration:1,
      delay:0.2,
      ease: "power2.out"  
    })


    playersTurn.style.display = 'none'
    restartBtn.style.display = "block";

    gsap.from(restartBtn,{
      opacity:0,
      x:100,
      duration:0.8,
      delay:0.6,
      ease: "bounce.out"  
    })
    gsap.from(headingH1,{
      opacity:0,
      y:-50,
      duration:0.8,
      delay:0.6,
      ease: "power2.out"  
    })




  } else if (num === player2Number) {
    winnerMessage.textContent = "Player 2 Wins!";
    headingH1.textContent = "Game Over!";
    endGame();
    playersTurn.style.display = 'none'
    restartBtn.style.display = "block";
  } else {
    numbers = numbers.filter((n) => n !== num);
    renderNumbersGrid();
  }
  playersTurn.innerHTML = `Player ${player} Turn`
  player = player === 1 ? 2 : 1;
}
restartBtn.addEventListener("click", function () {
  window.location.href = "index1.html";
});
// End Game
function endGame() {
  numbersGrid.innerHTML = "";
  const boxes = document.querySelectorAll(".number-box");
  boxes.forEach((box) => box.removeEventListener("click", handleNumberClick));
}



