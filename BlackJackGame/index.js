

let firstCard = 10
let secondCard = 18
let hashBlackJack = false
let isAlive = true
let message = " "
let sum = firstCard + secondCard

messageEl = document.getElementById("message-el")

function startGame(){

    if (sum <= 20) {
    message = "Do you want to draw a new card"}
    else if (sum === 21) {
    message = "Congrats! You've got Blackjack!"}
    else {
    message = "You're out of the game! "
    isAlive = false }
    
    messageEl.textContent = message

}

