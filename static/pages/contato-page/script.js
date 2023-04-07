var button = document.getElementById("button-contato")

var txt = document.getElementById("txt-button")

button.addEventListener("mouseover", function(event){
    txt.style.fontSize = "1.3vw"
    txt.style.transition = "font-size 0.5s"
    txt.style.transitionTimingFunction = "ease-in-out"
})

button.addEventListener("mouseout", function(event){
    txt.style.fontSize = "1.1vw"
    txt.style.transition = "font-size 0.5s"
    txt.style.transitionTimingFunction = "ease-in-out"
})