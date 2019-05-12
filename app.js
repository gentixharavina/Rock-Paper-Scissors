let userScore = 0;
let compScore =0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div  = document.getElementById("r");
const paper_div  = document.getElementById("p");
const scissors_div  = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber]
}

function convertWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertWord(userChoice)}${smallUserWord} beats ${convertWord(compChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() =>
        userChoice_div.classList.remove("green-glow")
    , 300)
}

function lose(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertWord(userChoice)}${smallUserWord} beats ${convertWord(compChoice)}${smallCompWord}. You win!`;
    document.getElementById("user")
    userChoice_div.classList.add("red-glow");
    setTimeout(() =>
        userChoice_div.classList.remove("red-glow")
    , 300)
}

function draw(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertWord(userChoice)}${smallUserWord} equals ${convertWord(compChoice)}${smallCompWord}. It's a draw. Try again!`;
    userChoice_div.classList.add("gray-glow");
    setTimeout(() =>
        userChoice_div.classList.remove("gray-glow")
    , 300)
}
function game(userChoice) {
    const compChoice = getCompChoice();
    
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}
game();
function main() {
    rock_div.addEventListener('click', () =>
        game("r")
    );

    paper_div.addEventListener('click', () =>
        game("p")
    );

    scissors_div.addEventListener('click', () =>
        game("s")
    );
}

main();