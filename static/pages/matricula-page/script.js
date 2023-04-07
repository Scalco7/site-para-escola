var button_enviar = document.getElementById("button-enviar")

var txt_enviar = document.getElementById("txt-enviar")

button_enviar.addEventListener("mouseover", function(event){
    txt_enviar.style.fontSize = "1.6vw"
    txt_enviar.style.transition= "font-size 0.3s"
    txt_enviar.style.transitionTimingFunction = "ease-in-out"
})

button_enviar.addEventListener("mouseout", function(event){
    txt_enviar.style.fontSize = "1.5vw"
    txt_enviar.style.transition= "font-size 0.5s"
    txt_enviar.style.transitionTimingFunction = "ease-in-out"
})
