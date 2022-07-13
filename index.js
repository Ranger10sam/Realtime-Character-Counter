const charVal = document.getElementById("textarea")
const totalCount = document.getElementById("total-counter")
const  remainingCount = document.getElementById("remaining-counter")
const btn = document.getElementById("copybtn")

let userChar = 0;

updateCounter = () =>{
    userChar = charVal.value.length;
    totalCount.innerText = userChar;
    remainingCount.innerText = 200-userChar;
}

charVal.addEventListener("keyup", () => updateCounter());

const copyText = () => {
    charVal.select();
    charVal.setSelectionRange(0, 9999); //for mobile
    navigator.clipboard.writeText(charVal.value);
}
function changeText(text, textToChangeBackTo) {
    btn.textContent = text;
    setTimeout(function() { btn.textContent = textToChangeBackTo; }, 1000);
}