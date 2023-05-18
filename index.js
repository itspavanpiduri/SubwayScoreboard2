// let welcomeEl = document.getElementById("welcome-el")
// let greeting = "welcome back "
// let username = "pavan"
// welcomeEl.innerText = greeting+username
// welcomeEl.innerText = welcomeEl.innerText + "👏"

let countEl = document.getElementById("count-el")

let count = 0

function increment(){
        count = count+1
    document.getElementById("count-el").innerText = count
    
}

let saveEl = document.getElementById("save-el")
function save(){
    
    let lastSave = countEl.innerText
    saveEl.innerText += " "+lastSave +" -"
    count = 0
    countEl.innerText = 0
}

// Shoe Error code

// let shoeEl = document.getElementById("shoe-el")
// let ErrorEl = document.getElementById("error")
// function shoeError(){
//     ErrorEl.innerText = "Something went wrong, please try again"
// }

