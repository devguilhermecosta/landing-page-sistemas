var mb = document.getElementById('mb')
mb.addEventListener("click", activate)
var menu = document.getElementById('menu')
var state = false

function activate() {
    if (window.innerWidth < 992) {
        if (state == false) {
            menu.style.display = "inline-block"
            state = true
        } else if (state == true) {
            menu.style.display = "none"
            state = false
        }
    }
}

function to_quit() {
    if (window.innerWidth < 992) {
        menu.style.display = "none"
        state = false
    }
}
