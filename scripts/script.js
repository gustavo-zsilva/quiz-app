const question = document.querySelector('.question h1')
const next = document.querySelector('.content .next')
const ul = document.querySelector('.content .options ul')
const buttons = []
const numOptions = 4


var fillOptions = numOptions === 2 ? fill(2) : fill(4);

function fill(n) {
    for (var i = 1; i <= n; i++) {
        var li = document.createElement('li')
        buttons[i] = document.createElement('button')
        li.appendChild(buttons[i])
        ul.appendChild(li)
    }
}

buttons.forEach(() => {
    addEventListener('click', () => {
        
        next.classList.remove('hide')
    })
})
