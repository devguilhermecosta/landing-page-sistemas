var mb = document.getElementById('mb')
var menu = document.getElementById('menu')
var state = false

function activate() {

    if (state == false) {
        menu.style.display = "inline-block"
        state = true
    } else if (state == true) {
        menu.style.display = "none"
        state = false
    }
}
