var box_1 = document.getElementById("box-1")

var box_2 = document.getElementById("box-2")

var box_3 = document.getElementById("box-3")
box_3.hidden = false

var box_4 = document.getElementById("box-4")
box_4.hidden = false

var controle_box_3 = true

var controle_box_4 = true

window.addEventListener('scroll', function(event){

    if(this.window.scrollY > 400 & controle_box_3){
        b_3()

        controle_box_3 = false
    }

    if(this.window.scrollY > 700 & controle_box_4){
        b_4()

        controle_box_4 = false
    }

    if(this.window.scrollY < 300 & !controle_box_3){
        box_3.style.marginRight = "100%"
        box_3.style.width = "0%"
        box_3.style.transition = "margin-right 0.4s, width 0.4s"
        box_3.style.transitionTimingFunction = "ease-in-out"

        controle_box_3 = true
    }

    if(this.window.scrollY < 600 & !controle_box_4){
        box_4.style.marginLeft = "80%"
        box_4.style.width = "0%"
        box_4.style.transition = "margin-left 0.4s, width 0.4s"
        box_4.style.transitionTimingFunction = "ease-in-out"

        controle_box_4 = true
    }
})

async function b_3(){
    box_3.hidden = false
    box_3.style.marginRight = "30%"
    box_3.style.width = "70%"
    box_3.style.transition = "margin-right 0.7s, width 0.7s"
    box_3.style.transitionTimingFunction = "ease-in-out"
}

async function b_4(){
    box_4.hidden = false
    box_4.style.marginLeft = "30%"
    box_4.style.width = "70%"
    box_4.style.transition = "margin-left 0.7s, width 0.7s"
    box_4.style.transitionTimingFunction = "ease-in-out"
}