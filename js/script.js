var mb = document.getElementById('mb')
mb.addEventListener("click", activate)
var menu = document.getElementById('menu')
var altura = window.innerWidth
var state = false

if (altura >= 992) {
    menu.style.display = "inline-block";
}

function activate() {
    if (state == false) {
        menu.style.display = "inline-block";
        // mb.style.backgroundImage = "url(../images/close.png)"
        state = true
    } else if (state == true) {
        menu.style.display = "none"
        mb.style.backgroundImage = "url(../images/menu.png)"
        state = false
    }
}

function fechar() {
    if (altura < 992 && state == true) {
        menu.style.display = "none"
        mb.style.backgroundImage = "url(../images/menu.png)"
        state = false
    }
}