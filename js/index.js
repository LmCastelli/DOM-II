const buttons = document.querySelectorAll(".btn");

const sunButton = buttons[0];
const mtnButton = buttons[1];
const islButton = buttons[2];
document.addEventListener("click", function (event) {
    console.log("you clicked me");
})
sunButton.addEventListener("mouseover", function(event){
    if (sunButton.classList.contains("warning") === false){
        sunButton.textContent = "Only one spot left!";
        }
})
sunButton.addEventListener("mouseout", function (event) {
    if (sunButton.classList.contains("warning") === false){
        sunButton.textContent = "Come get the last spot!";
        }
})
sunButton.addEventListener('click', function(event){
    sunButton.style.fontSize = "1.2em";
    if (sunButton.classList.contains("primed")){
        sunButton.remove();
    }
    if (sunButton.classList.contains("warning")){
        sunButton.classList.add("primed");
        sunButton.textContent = "FULL! Don't click me again!"
        event.stopImmediatePropagation;
    }else{
        sunButton.textContent = "Dang, the last spot just got filled!";
        sunButton.classList.add("warning");
    }   
})


mtnButton.textContent = "Don't push escape!";
document.addEventListener('keydown', esc);

function esc(event) {
    if (event.key === "Escape"){
        if (mtnButton.classList.contains("primed")){
            mtnButton.remove();
        }
        if (mtnButton.classList.contains("warning")){
            mtnButton.style.fontSize = "5px";
            mtnButton.textContent = "Don't do it again!!";
            mtnButton.classList.add("primed");
        }
        else{
        mtnButton.style.fontSize = "10px";
        mtnButton.textContent = "Why did you do that?"
        mtnButton.classList.add("warning");
        }
    }
}

islButton.textContent ="No double click please!";
islButton.addEventListener('dblclick', function (event){
    islButton.textContent = "C'mon really?";
})
islButton.addEventListener("mouseleave", function (event){
    islButton.textContent = "I won't be going away";
    islButton.classList.remove("warning");
})
islButton.addEventListener("auxclick", function (event){
    islButton.textContent = "It'll take more than that!";
    islButton.classList.add("warning");
})


const mainTitle = document.querySelectorAll("h1");
const whyTitle = mainTitle[0];

whyTitle.addEventListener("click", function (event) {
    whyTitle.style.color = "orange";
})
whyTitle.addEventListener('click', function (event) {
    console.log("I'm orange now!");
    event.stopPropagation;
})

window.addEventListener('load', (event) => {
    console.log('Welcome to the Fun Bus!');
});
window.addEventListener('copy', (event) => {
    console.log("Dont't plagiarize!")
})

Array.from(document.links).forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
    })
})