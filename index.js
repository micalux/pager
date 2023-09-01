
let pagerDisplayEl = document.getElementById("pager-text")
let phoneDisplayEl = document.getElementById("phone-text")

let finalNumber = []

const notificationSound = new Audio('assets/pager.wav');

const resetButtonEl =document.getElementById("reset-button")
const sendButtonEl =document.getElementById("send-button")

const oneEl = document.getElementById("one")
const twoEl = document.getElementById("two")
const threeEl = document.getElementById("three")
const fourEl = document.getElementById("four")
const fiveEl = document.getElementById("five")
const sixEl = document.getElementById("six")
const sevenEl = document.getElementById("seven")
const eightEl = document.getElementById("eight")
const nineEl = document.getElementById("nine")
const asterEl = document.getElementById("aster")
const zeroEl = document.getElementById("zero")
const hashEl = document.getElementById("hash")


resetButtonEl.addEventListener("click", function() {
    phoneDisplayEl.textContent = ""
    pagerDisplayEl.textContent = ""
    finalNumber = []
})

sendButtonEl.addEventListener("click", function() {
    phoneDisplayEl.textContent = ""
    setTimeout(function(){
    notificationSound.play()
    pagerDisplayEl.textContent = finalNumber.join("")    
    }, 2000)
})


function displayNumber(numberEl, keyNumber) {
    numberEl.addEventListener("click", function() {
        if(finalNumber.length < 14 ) {
            phoneDisplayEl.textContent += keyNumber
            finalNumber.push(keyNumber)
        } else {
            displayError()
        }
})
}

function displayError() {
    alert("Sorry buddy but you can't use more than 14 characters.")
  }


displayNumber(oneEl, "1")
displayNumber(twoEl, "2")
displayNumber(threeEl, "3")
displayNumber(fourEl, "4")
displayNumber(fiveEl, "5")
displayNumber(sixEl, "6")
displayNumber(sevenEl, "7")
displayNumber(eightEl, "8")
displayNumber(nineEl, "9")
displayNumber(asterEl, "*")
displayNumber(zeroEl, "0")
displayNumber(hashEl, "#")