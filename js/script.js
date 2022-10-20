var mb = document.getElementById('mb')
mb.addEventListener("click", activate)
var menu = document.getElementById('menu')
var state = false

function activate() {
    if (state == false) {
        menu.style.display = "inline-block";
        mb.style.backgroundImage = "url(../images/close.png)"
        state = true
    } else if (state == true) {
        menu.style.display = "none"
        mb.style.backgroundImage = "url(../images/menu.png)"
        state = false
    }
}

function fechar() {
    var altura = window.innerWidth
    if (altura < 992) {
        menu.style.display = "none"
        mb.style.backgroundImage = "url(../images/menu.png)"
        state = false
    }
}