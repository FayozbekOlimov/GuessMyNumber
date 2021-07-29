const again = document.querySelector(".again");
const checkButton = document.querySelector('.check');
const input = document.querySelector('.guess');
const score = document.querySelector('.score');
const number = document.querySelector(".number");
const message = document.querySelector(".message");
let gameOver = false;
let randomNumber = Math.floor(Math.random() * 100) + 1;

checkButton.addEventListener('click', function() {
    const myNumber = +input.value;
    const highScore = document.querySelector(".highscore");

    if(randomNumber == myNumber) {
        document.body.style.background = "#60b347";
        number.innerText = randomNumber;
        message.innerText = "Correct!🎉";
        
        if(score.innerText > highScore.innerText) {
            highScore.innerText = score.innerText;
        }

        gameOver = true;
    }
    else if(!gameOver) {
        score.innerText--;
        if(score.innerText == 0)
            showModal();
        if(myNumber < randomNumber)
            message.innerText = "Too low ...";
        else
            message.innerText = "Too high ...";
    }
});

again.addEventListener('click', reset);

function reset() {
    document.body.style.background = "#222";
    input.value = "";
    number.innerText = "?";
    score.innerText = 20;
    message.innerText = "Start guessing...";
    randomNumber = Math.floor(Math.random() * 100) + 1;
    gameOver = false;
}

// Modal


const modal = document.querySelector(".modal");
const btnClose = document.getElementById("btn-close");
const overlay = document.querySelector(".overlay");

document.addEventListener('click', (e) => {
    if(e.target.classList[0] == "overlay") {
        hiddenModal();
        reset();
    }
})

btnClose.addEventListener('click', () => {
    hiddenModal();
    reset();
})

function showModal() {
    overlay.classList.remove('hidden');
    modal.style.top = "50%";
}
function hiddenModal() {
    modal.style.top = "-50%";
    overlay.classList.add('hidden');
}