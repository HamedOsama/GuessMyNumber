'use strict';
// Declare variables.
let score = 50;
let message = document.querySelector('.message');
let change = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let tips = document.querySelectorAll('.tips');
let randomNumber = Math.trunc(Math.random() * 50 + 1);
//Clear the tips after 7.5 sec
setTimeout(() => {
    tips.forEach(tip => {
        tip.style.display = 'none'
    });
}, 7500);
// The main function
document.querySelector('.check').addEventListener('click', function() {
        let value = Number(document.querySelector('.guess').value);
        let difference = Math.abs(value - randomNumber);
        if (score >= 1) {
            if (!value) {
                message.textContent = "Please Insert a Number🙄";
            } else if (value === randomNumber) {
                if (score > highScore.textContent) {
                    highScore.textContent = score;
                }
                message.textContent = "Correct Answer!!🎉";
                document.querySelector('.number').textContent = randomNumber;
                document.querySelector('body').style.backgroundColor = '#60b347';
                document.querySelector('.number').style.width = '30rem';
            } else if (value > randomNumber) {
                if (difference >= 5) {
                    message.textContent = "Too High";
                } else message.textContent = "High";
                score--;
                change.innerHTML = score;
            } else if (value < randomNumber) {
                if (difference >= 5) {
                    message.textContent = "Too Low";
                } else message.textContent = "Low";
                score--;
                change.innerHTML = score;
            }
        } else message.textContent = "Game Over Please Try Again💀";
    })
    // Again button
document.querySelector('.again').addEventListener('click', function() {
    message.textContent = "Start guessing...";
    change.textContent = "50";
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    score = 50;
    randomNumber = Math.trunc(Math.random() * 50 + 1);
    document.querySelector('.guess').value = null;
})
