var mb = document.getElementById('mb')
var menu = document.getElementById('menu')
var check = false

function activate() {
    if (check === false) {
        menu.style.display = "block"
        check = true
    } else {
        menu.style.display = "none"
        check = false
    }
}

function to_quit() {
    menu.style.display = "none"
    check = false
}