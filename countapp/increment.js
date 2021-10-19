
let welcomeEl = document.getElementById("welcome-el")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let greeting = "Welcome"
let name = "vipin"

welcomeEl.innerText = greeting +" " + name 



let count = 0
function increment() {

    count += 1 
    countEl.textContent = count
    
}


function save() {

    let countStr= count + " - "

    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0

}

