const question = document.querySelector('.question h1')
const ul = document.querySelector('.content .options ul')
const options = {}
const numOptions = 2

if (numOptions === 2) {
    for (var i = 0; i <= 1; i++) {
        var button = document.createElement('button')
        ul.appendChild(button)
    }

}