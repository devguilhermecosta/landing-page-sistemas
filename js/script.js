var mb = document.getElementById('mb')
mb.addEventListener("click", to_active)
mb.style.backgroundImage = "url(images/menu.png)"
mb.style.backgroundRepeat = "no-repeat"
mb.style.backgroundColor = "transparent"
var menu = document.getElementById('menu')
var state = false

function to_active() {
    if (state == false) {
        menu.style.display = "block"
        mb.style.backgroundImage = "url(images/close.png)"
        state = true
    } else if (state == true) {
        menu.style.display = "none"
        mb.style.backgroundImage = "url(images/menu.png)"
        state = false
    }
}

function to_quit() {
    if (window.innerWidth < 992) {
        menu.style.display = "none"
        mb.style.backgroundImage = "url(images/menu.png)"
        state = false
    }
}