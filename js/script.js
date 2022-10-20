var mb = document.getElementById('mb')
mb.addEventListener("click", activate)
var menu = document.getElementById('menu')
var largura = window.innerWidth
var state = false

function activate() {
    if (state == false) {
        menu.style.display = "inline-block";
        mb.style.backgroundImage = "url(../images/close.png)"
        state = true
    } else if (state == true) {
        menu.style.display = "none"
        mb.style.display = "block"
        mb.style.backgroundImage = "url(../images/menu.png)"
        state = false
    }
}

function fechar() {
    if (largura < 992 && state == true) {
        menu.style.display = "none"
        mb.style.backgroundImage = "url(../images/menu.png)"
        state = false
    } else if (largura >= 992) {
        menu.style.display = "block"
    }
}