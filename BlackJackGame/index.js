

let firstCard = 10
let secondCard = 18
let cards = [firstCard,secondCard]
let hashBlackJack = false
let isAlive = true
let message = " "
let sum = firstCard + secondCard
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")


let cardsEL = document.getElementById("cards-el")

function renderGame(){

    cardsEL.textContent = "Cards :" + cards[0]+ " " + cards[1]
    sumEl.textContent ="Sum :" + sum

    if (sum <= 20) {
    message = "Do you want to draw a new card"}
    else if (sum === 21) {
    message = "Congrats! You've got Blackjack!"}
    else {
    message = "You're out of the game! "
    isAlive = false }
    
    messageEl.textContent = message

}
function startGame() {

    renderGame()
}

function newCard() {
    console.log("Drawing a new card from deck")
    let card = 3
    cards.push(card)
    renderGame()
    
}
